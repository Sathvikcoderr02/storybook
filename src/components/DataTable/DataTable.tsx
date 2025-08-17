import React, { useState, useMemo, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  className?: string;
  rowKey?: keyof T | ((record: T) => string | number);
  emptyText?: React.ReactNode;
}

type SortDirection = 'asc' | 'desc' | null;

/**
 * A responsive and accessible data table component with sorting and selection capabilities.
 * 
 * @template T - The type of data in the table
 * @param {DataTableProps<T>} props - The component props
 * @returns {JSX.Element} The rendered DataTable component
 */
export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  className,
  rowKey = 'id',
  emptyText = 'No data available',
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: SortDirection;
  }>({ key: null, direction: null });

  const tableRef = useRef<HTMLTableElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  /**
   * Toggles the selection of a row
   * @param {T} row - The row to toggle selection for
   */
  const toggleRowSelection = (row: T) => {
    const key = typeof rowKey === 'function' ? rowKey(row) : row[rowKey];
    const newSelected = new Set(selectedRows);
    
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    
    setSelectedRows(newSelected);
    
    if (onRowSelect) {
      const selectedData = data.filter((item) => {
        const itemKey = typeof rowKey === 'function' ? rowKey(item) : item[rowKey];
        return newSelected.has(itemKey);
      });
      onRowSelect(selectedData);
    }
  };

  /**
   * Toggles selection for all rows
   */
  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allKeys = new Set(
        data.map((item) => (typeof rowKey === 'function' ? rowKey(item) : item[rowKey]))
      );
      setSelectedRows(allKeys);
      onRowSelect?.([...data]);
    }
  };

  /**
   * Handles column sorting
   * @param {string} key - The column key to sort by
   */
  const requestSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];

      if (aValue === bValue) return 0;
      
      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  }, [data, sortConfig]);

  /**
   * Renders the content of a table cell
   * @param {Column<T>} column - The column configuration
   * @param {T} record - The row data
   * @returns {React.ReactNode} The rendered cell content
   */
  const renderCell = (column: Column<T>, record: T) => {
    if (column.render) {
      return column.render(record[column.dataIndex], record);
    }
    return String(record[column.dataIndex] ?? '');
  };

  /**
   * Gets the unique key for a row
   * @param {T} record - The row data
   * @returns {string | number} The unique key
   */
  const getRowKey = (record: T) => {
    return typeof rowKey === 'function' ? rowKey(record) : record[rowKey];
  };

  // Memoize computed values
  const allSelected = useMemo(
    () => data.length > 0 && selectedRows.size === data.length,
    [data.length, selectedRows.size]
  );
  
  const someSelected = useMemo(
    () => selectedRows.size > 0 && selectedRows.size < data.length,
    [selectedRows.size, data.length]
  );
  /**
   * Checks if a row is selected
   * @param {T} record - The row data
   * @returns {boolean} Whether the row is selected
   */
  const isRowSelected = useMemo(() => (record: T) => {
    const key = getRowKey(record);
    return selectedRows.has(key);
  }, [selectedRows]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, row: T) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleRowSelection(row);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className={cn('flex items-center justify-center p-8', className)}>
        <div className="animate-pulse flex flex-col space-y-2 w-full">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className={cn('flex flex-col items-center justify-center p-8 text-gray-500 dark:text-gray-400', className)}>
        <svg
          className="w-12 h-12 mb-4 text-gray-300 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
        <p className="text-lg">{emptyText}</p>
      </div>
    );
  }

  // Responsive table container
  return (
    <div 
      className={cn('w-full overflow-x-auto', className)}
      role="region" 
      aria-label="Data table"
      tabIndex={0}
    >
      <table 
        ref={tableRef}
        className={cn(
          'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
          'text-left text-sm',
          isMobile ? 'block' : 'table-fixed'
        )}
        role="grid"
        aria-label="Data table"
      >
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-indigo-900 dark:to-blue-900">
          <tr>
            {selectable && (
              <th 
                scope="col" 
                className="w-10 px-2 sm:px-4 py-3 text-left"
                aria-label="Select all rows"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    aria-label="Select all rows"
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = someSelected && !allSelected;
                      }
                    }}
                  />
                </div>
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={cn(
                  'px-2 sm:px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider',
                  column.sortable ? 'cursor-pointer hover:bg-blue-700/80 dark:hover:bg-indigo-800/80 transition-colors duration-200' : '',
                  `text-${column.align || 'left'}`,
                  column.width ? `w-[${column.width}]` : '',
                  isMobile && column.key === 'actions' ? 'sticky right-0 bg-blue-600 dark:bg-indigo-800' : ''
                )}
                onClick={() => column.sortable && requestSort(String(column.dataIndex))}
                aria-sort={
                  sortConfig.key === column.dataIndex
                    ? sortConfig.direction === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                }
              >
                <div className="flex items-center">
                  {column.title}
                  {column.sortable && (
                    <span className="ml-1">
                      {sortConfig.key === column.dataIndex ? (
                        sortConfig.direction === 'asc' ? (
                          <span className="text-primary-500">↑</span>
                        ) : sortConfig.direction === 'desc' ? (
                          <span className="text-primary-500">↓</span>
                        ) : (
                          <span className="text-gray-400">↕</span>
                        )
                      ) : (
                        <span className="text-gray-400">↕</span>
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-100 dark:divide-slate-700">
          {sortedData.map((row, rowIndex) => {
            const rowKeyValue = getRowKey(row);
            const isSelected = isRowSelected(row);
            
            return (
              <tr
                key={rowKeyValue}
                className={cn(
                  'hover:bg-blue-50/50 dark:hover:bg-slate-800/80',
                  isSelected && 'bg-blue-50 dark:bg-slate-800/60',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  'transition-all duration-200',
                  isMobile ? 'block border-b border-blue-50/30 dark:border-slate-700' : 'table-row',
                  'group'
                )}
                role="row"
                aria-selected={isSelected}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, row)}
                onClick={() => toggleRowSelection(row)}
              >
              {selectable && (
                <td 
                  className="px-2 sm:px-4 py-3 whitespace-nowrap"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      checked={isSelected}
                      onChange={() => toggleRowSelection(row)}
                      aria-label={`Select row ${rowIndex + 1}`}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn(
                    'px-2 sm:px-4 py-3 text-sm text-gray-800 dark:text-gray-100',
                    `text-${column.align || 'left'}`,
                    isMobile ? 'block' : 'table-cell',
                    isMobile && column.key === 'actions' ? 'sticky right-0 bg-white dark:bg-slate-900' : '',
                    'group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors',
                    isSelected ? 'font-medium' : ''
                  )}
                  data-label={column.title}
                >
                  {isMobile ? (
                    <div className="flex items-center">
                      <span className="font-medium text-blue-700 dark:text-blue-300 w-24 flex-shrink-0">
                        {column.title}:
                      </span>
                      <div className="flex-1">
                        {renderCell(column, row)}
                      </div>
                    </div>
                  ) : (
                    renderCell(column, row)
                  )}
                </td>
              ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
