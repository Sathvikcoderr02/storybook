import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as d}from"./index-BwDkhjyp.js";import{c as p}from"./utils-BAegwAxf.js";import{B as ae}from"./Button-DqjGwLnA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BV_IynQ4.js";function f({data:n,columns:m,loading:u=!1,selectable:r=!1,onRowSelect:s,className:o,rowKey:c="id",emptyText:P="No data available"}){const[y,j]=d.useState(new Set),[i,H]=d.useState({key:null,direction:null}),F=d.useRef(null),[b,G]=d.useState(!1);d.useEffect(()=>{const t=()=>{G(window.innerWidth<768)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const I=t=>{const a=typeof c=="function"?c(t):t[c],x=new Set(y);if(x.has(a)?x.delete(a):x.add(a),j(x),s){const g=n.filter(l=>{const te=typeof c=="function"?c(l):l[c];return x.has(te)});s(g)}},Q=()=>{if(y.size===n.length)j(new Set),s==null||s([]);else{const t=new Set(n.map(a=>typeof c=="function"?c(a):a[c]));j(t),s==null||s([...n])}},X=t=>{let a="asc";i.key===t&&i.direction==="asc"?a="desc":i.key===t&&i.direction==="desc"&&(a=null),H({key:t,direction:a})},Y=d.useMemo(()=>!i.key||!i.direction?n:[...n].sort((t,a)=>{const x=t[i.key],g=a[i.key];return x===g?0:i.direction==="asc"?x<g?-1:1:x>g?-1:1}),[n,i]),T=(t,a)=>t.render?t.render(a[t.dataIndex],a):String(a[t.dataIndex]??""),D=t=>typeof c=="function"?c(t):t[c],R=d.useMemo(()=>n.length>0&&y.size===n.length,[n.length,y.size]),Z=d.useMemo(()=>y.size>0&&y.size<n.length,[y.size,n.length]),K=d.useMemo(()=>t=>{const a=D(t);return y.has(a)},[y]),ee=(t,a)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),I(a))};return u?e.jsx("div",{className:p("flex items-center justify-center p-8",o),children:e.jsxs("div",{className:"animate-pulse flex flex-col space-y-2 w-full",children:[e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"}),[...Array(5)].map((t,a)=>e.jsx("div",{className:"h-12 bg-gray-100 dark:bg-gray-800 rounded w-full"},a))]})}):n.length===0?e.jsxs("div",{className:p("flex flex-col items-center justify-center p-8 text-gray-500 dark:text-gray-400",o),children:[e.jsx("svg",{className:"w-12 h-12 mb-4 text-gray-300 dark:text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),e.jsx("p",{className:"text-lg",children:P})]}):e.jsx("div",{className:p("w-full overflow-x-auto",o),role:"region","aria-label":"Data table",tabIndex:0,children:e.jsxs("table",{ref:F,className:p("min-w-full divide-y divide-gray-200 dark:divide-gray-700","text-left text-sm",b?"block":"table-fixed"),role:"grid","aria-label":"Data table",children:[e.jsx("thead",{className:"bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-indigo-900 dark:to-blue-900",children:e.jsxs("tr",{children:[r&&e.jsx("th",{scope:"col",className:"w-10 px-2 sm:px-4 py-3 text-left","aria-label":"Select all rows",children:e.jsx("div",{className:"flex items-center",children:e.jsx("input",{type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800",checked:R,onChange:Q,"aria-label":"Select all rows",ref:t=>{t&&(t.indeterminate=Z&&!R)}})})}),m.map(t=>e.jsx("th",{scope:"col",className:p("px-2 sm:px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",t.sortable?"cursor-pointer hover:bg-blue-700/80 dark:hover:bg-indigo-800/80 transition-colors duration-200":"",`text-${t.align||"left"}`,t.width?`w-[${t.width}]`:"",b&&t.key==="actions"?"sticky right-0 bg-blue-600 dark:bg-indigo-800":""),onClick:()=>t.sortable&&X(String(t.dataIndex)),"aria-sort":i.key===t.dataIndex?i.direction==="asc"?"ascending":"descending":"none",children:e.jsxs("div",{className:"flex items-center",children:[t.title,t.sortable&&e.jsx("span",{className:"ml-1",children:i.key===t.dataIndex?i.direction==="asc"?e.jsx("span",{className:"text-primary-500",children:"↑"}):i.direction==="desc"?e.jsx("span",{className:"text-primary-500",children:"↓"}):e.jsx("span",{className:"text-gray-400",children:"↕"}):e.jsx("span",{className:"text-gray-400",children:"↕"})})]})},String(t.key)))]})}),e.jsx("tbody",{className:"bg-white dark:bg-slate-900 divide-y divide-gray-100 dark:divide-slate-700",children:Y.map((t,a)=>{const x=D(t),g=K(t);return e.jsxs("tr",{className:p("hover:bg-blue-50/50 dark:hover:bg-slate-800/80",g&&"bg-blue-50 dark:bg-slate-800/60","focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500","transition-all duration-200",b?"block border-b border-blue-50/30 dark:border-slate-700":"table-row","group"),role:"row","aria-selected":g,tabIndex:0,onKeyDown:l=>ee(l,t),onClick:()=>I(t),children:[r&&e.jsx("td",{className:"px-2 sm:px-4 py-3 whitespace-nowrap",onClick:l=>l.stopPropagation(),children:e.jsx("div",{className:"flex items-center",children:e.jsx("input",{type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800",checked:g,onChange:()=>I(t),"aria-label":`Select row ${a+1}`,onClick:l=>l.stopPropagation()})})}),m.map(l=>e.jsx("td",{className:p("px-2 sm:px-4 py-3 text-sm text-gray-800 dark:text-gray-100",`text-${l.align||"left"}`,b?"block":"table-cell",b&&l.key==="actions"?"sticky right-0 bg-white dark:bg-slate-900":"","group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors",g?"font-medium":""),"data-label":l.title,children:b?e.jsxs("div",{className:"flex items-center",children:[e.jsxs("span",{className:"font-medium text-blue-700 dark:text-blue-300 w-24 flex-shrink-0",children:[l.title,":"]}),e.jsx("div",{className:"flex-1",children:T(l,t)})]}):T(l,t)},String(l.key)))]},x)})})]})})}try{f.displayName="DataTable",f.__docgenInfo={description:"A responsive and accessible data table component with sorting and selection capabilities.",displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!1,type:{name:"(selectedRows: T[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rowKey:{defaultValue:{value:"id"},description:"",name:"rowKey",required:!1,type:{name:"string | number | symbol | ((record: T) => string | number)"}},emptyText:{defaultValue:{value:"No data available"},description:"",name:"emptyText",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const S=n=>{const m=["Admin","Editor","Viewer","Developer","Manager"],u=["active","inactive","pending"],r=["John Doe","Jane Smith","Robert Johnson","Emily Davis","Michael Brown","Sarah Wilson","David Taylor","Jessica Anderson","James Thomas","Jennifer Jackson"];return Array.from({length:n},(s,o)=>({id:`user-${o+1}`,name:r[o%r.length],email:`user${o+1}@example.com`,role:m[o%m.length],status:u[o%u.length],lastLogin:new Date(Date.now()-Math.floor(Math.random()*30)*24*60*60*1e3).toISOString().split("T")[0]}))},oe={title:"Components/DataTable",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:!1},columns:{control:!1},loading:{control:"boolean"},selectable:{control:"boolean"},onRowSelect:{action:"rowsSelected"}}},h={render:n=>{const m=d.useMemo(()=>S(10),[]),u=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email"},{key:"role",title:"Role",dataIndex:"role",sortable:!0},{key:"status",title:"Status",dataIndex:"status",sortable:!0,render:r=>e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${r==="active"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":r==="inactive"?"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200":"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`,children:r})},{key:"lastLogin",title:"Last Login",dataIndex:"lastLogin",sortable:!0}];return e.jsx(f,{...n,data:m,columns:u})},args:{loading:!1,selectable:!1}},k={render:n=>{const m=d.useMemo(()=>S(8),[]),[u,r]=d.useState([]),s=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email"},{key:"role",title:"Role",dataIndex:"role"},{key:"status",title:"Status",dataIndex:"status",render:o=>e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${o==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:o})}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:[u.length," row(s) selected"]}),u.length>0&&e.jsx(ae,{variant:"outline",size:"sm",onClick:()=>alert("Action on selected rows"),children:"Action on Selected"})]}),e.jsx(f,{...n,data:m,columns:s,selectable:!0,onRowSelect:r})]})}},v={render:n=>{const m=d.useMemo(()=>S(5),[]),u=[{key:"user",title:"User",dataIndex:"name",render:(r,s)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium",children:s.name.charAt(0)}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900 dark:text-white",children:s.name}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:s.email})]})]})},{key:"role",title:"Role",dataIndex:"role",render:r=>e.jsx("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",children:r})},{key:"lastActive",title:"Last Active",dataIndex:"lastLogin",render:r=>{const s=Math.floor((new Date().getTime()-new Date(r).getTime())/864e5);return e.jsxs("div",{className:"text-sm text-gray-900 dark:text-white",children:[r,e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:s===0?"Today":`${s} days ago`})]})},sortable:!0},{key:"actions",title:"Actions",dataIndex:"id",render:()=>e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300",children:"Delete"})]})}];return e.jsx(f,{...n,data:m,columns:u})}},N={args:{data:[],columns:[{key:"name",title:"Name",dataIndex:"name"},{key:"email",title:"Email",dataIndex:"email"},{key:"role",title:"Role",dataIndex:"role"},{key:"status",title:"Status",dataIndex:"status"}],loading:!0}},w={args:{data:[],columns:[{key:"name",title:"Name",dataIndex:"name"},{key:"email",title:"Email",dataIndex:"email"},{key:"role",title:"Role",dataIndex:"role"},{key:"status",title:"Status",dataIndex:"status"}],emptyText:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"No users found"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"There are no users matching your criteria."}),e.jsx("button",{className:"mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Add New User"})]})}};var A,M,C;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const users = useMemo(() => generateUsers(10), []);
    const columns: Column<User>[] = [{
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true
    }, {
      key: 'email',
      title: 'Email',
      dataIndex: 'email'
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      sortable: true
    }, {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      sortable: true,
      render: value => <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${value === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : value === 'inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}\`}>
            {value}
          </span>
    }, {
      key: 'lastLogin',
      title: 'Last Login',
      dataIndex: 'lastLogin',
      sortable: true
    }];
    return <DataTable {...args} data={users} columns={columns} />;
  },
  args: {
    loading: false,
    selectable: false
  }
}`,...(C=(M=h.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var E,L,_;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const users = useMemo(() => generateUsers(8), []);
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    const columns: Column<User>[] = [{
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true
    }, {
      key: 'email',
      title: 'Email',
      dataIndex: 'email'
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role'
    }, {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: value => <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}\`}>
            {value}
          </span>
    }];
    return <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {selectedRows.length} row(s) selected
          </span>
          {selectedRows.length > 0 && <Button variant="outline" size="sm" onClick={() => alert('Action on selected rows')}>
              Action on Selected
            </Button>}
        </div>
        <DataTable {...args} data={users} columns={columns} selectable onRowSelect={setSelectedRows} />
      </div>;
  }
}`,...(_=(L=k.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var V,U,$;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const users = useMemo(() => generateUsers(5), []);
    const columns: Column<User>[] = [{
      key: 'user',
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium">
              {record.name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{record.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{record.email}</div>
            </div>
          </div>
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      render: role => <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {role}
          </span>
    }, {
      key: 'lastActive',
      title: 'Last Active',
      dataIndex: 'lastLogin',
      render: date => {
        const daysAgo = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24));
        return <div className="text-sm text-gray-900 dark:text-white">
              {date}
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {daysAgo === 0 ? 'Today' : \`\${daysAgo} days ago\`}
              </div>
            </div>;
      },
      sortable: true
    }, {
      key: 'actions',
      title: 'Actions',
      dataIndex: 'id',
      render: () => <div className="flex space-x-2">
            <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
              Edit
            </button>
            <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
              Delete
            </button>
          </div>
    }];
    return <DataTable {...args} data={users} columns={columns} />;
  }
}`,...($=(U=v.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var z,q,B;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: [{
      key: 'name',
      title: 'Name',
      dataIndex: 'name'
    }, {
      key: 'email',
      title: 'Email',
      dataIndex: 'email'
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role'
    }, {
      key: 'status',
      title: 'Status',
      dataIndex: 'status'
    }],
    loading: true
  }
}`,...(B=(q=N.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,W,O;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: [{
      key: 'name',
      title: 'Name',
      dataIndex: 'name'
    }, {
      key: 'email',
      title: 'Email',
      dataIndex: 'email'
    }, {
      key: 'role',
      title: 'Role',
      dataIndex: 'role'
    }, {
      key: 'status',
      title: 'Status',
      dataIndex: 'status'
    }],
    emptyText: <div className="text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-white">No users found</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          There are no users matching your criteria.
        </p>
        <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Add New User
        </button>
      </div>
  }
}`,...(O=(W=w.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ce=["Basic","WithRowSelection","WithCustomCells","LoadingState","EmptyState"];export{h as Basic,w as EmptyState,N as LoadingState,v as WithCustomCells,k as WithRowSelection,ce as __namedExportsOrder,oe as default};
