import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as o,R as Me}from"./index-BwDkhjyp.js";import{c as Ae}from"./index-BV_IynQ4.js";import{c as b}from"./utils-BAegwAxf.js";import"./_commonjsHelpers-BosuxZz1.js";const Le=({className:t})=>e.jsx("svg",{className:b("h-4 w-4 flex-shrink-0",t),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),De=({className:t})=>e.jsx("div",{className:b("h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent","text-primary-500 dark:text-primary-400",t),role:"status","aria-label":"Loading..."}),Ve=["flex w-full rounded-lg border-2 border-input bg-background px-4 py-2.5","text-sm text-foreground shadow-sm transition-all duration-200","file:border-0 file:bg-transparent file:text-sm file:font-medium","placeholder:text-muted-foreground","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50","dark:border-input/50 dark:bg-background/95 dark:focus-visible:ring-offset-0","transition-colors"].join(" "),ze=Ae(Ve,{variants:{variant:{filled:["bg-muted/50 border-input/50","hover:border-primary/50","focus:bg-background dark:focus:bg-background/95","dark:bg-muted/30 dark:border-input/30","dark:hover:border-primary/30"].join(" "),outlined:["border-input/80","hover:border-primary/50","dark:border-input/40","dark:hover:border-primary/30"].join(" "),ghost:["border-transparent","hover:bg-muted/50","dark:bg-background/30","dark:hover:bg-background/50","focus:border-primary/30"].join(" ")},size:{sm:"h-9 px-3 text-xs",md:"h-11 px-4 text-sm",lg:"h-12 px-5 text-base"}},defaultVariants:{variant:"outlined",size:"md"}}),a=o.forwardRef(({className:t,variant:i="outlined",size:r="md",label:p,helperText:l,helperTextClassName:h,errorMessage:g,invalid:f=!1,loading:m=!1,disabled:d,showClearButton:x=!1,isPassword:s=!1,showPasswordToggle:y=!1,onChange:c,value:w,type:R="text",containerClassName:ve,labelClassName:fe,inputClassName:ye,messageClassName:Re,errorIcon:we,loadingIndicator:Ne,onFocus:L,onBlur:D,onPasswordToggle:V,...N},j)=>{const[v,je]=o.useState(!1),[Ce,B]=o.useState(!1),[ke,q]=o.useState(w||""),W=o.useRef(null),z=w!==void 0,u=f||!!g,Se=n=>{var _;n.target.closest('button, a, [role="button"]')||(_=W.current)==null||_.focus()},Ie=n=>{z||q(n.target.value),c==null||c(n)},Te=()=>{z||q(""),c&&c({target:{value:""},currentTarget:{value:""}})},Fe=()=>{je(!v),V==null||V(!v)},C=Me.useId(),O=l?`${C}-helper-text`:void 0,H=u?`${C}-error-text`:void 0,Pe=u?H:O,Ee=R==="password"&&y?v?"text":"password":R;return e.jsxs("div",{className:b("w-full space-y-1.5","transition-all duration-200","group",d&&"opacity-70 cursor-not-allowed",ve),onClick:Se,"data-invalid":u?"":void 0,"data-loading":m?"":void 0,"data-disabled":d?"":void 0,children:[p&&e.jsxs("label",{htmlFor:C,className:b("block text-sm font-medium leading-none","sm:text-sm",u?"text-destructive":"text-foreground",d&&"opacity-70 cursor-not-allowed","transition-colors duration-200",fe),children:[p,N.required&&e.jsx("span",{className:"text-destructive ml-0.5","aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:C,ref:n=>{W.current=n,typeof j=="function"?j(n):j&&(j.current=n)},type:Ee,className:b(ze({variant:i,size:r}),"w-full","pr-8","disabled:opacity-70 disabled:cursor-not-allowed","read-only:opacity-70 read-only:cursor-default",u?"border-destructive/80 focus-visible:ring-destructive/30 dark:border-destructive/60":"group-hover:border-primary/50 dark:group-hover:border-primary/30",Ce&&!u&&"ring-2 ring-ring/20",ye,t),value:z?w:ke,onChange:Ie,onFocus:n=>{B(!0),L==null||L(n)},onBlur:n=>{B(!1),D==null||D(n)},disabled:d||m,"aria-invalid":u?"true":"false","aria-describedby":Pe,"aria-required":N.required?"true":"false","aria-busy":m?"true":"false","aria-disabled":d||m?"true":"false","data-invalid":u?"":void 0,"data-loading":m?"":void 0,...N,required:N.required}),e.jsxs("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1",children:[m&&e.jsx("div",{className:"flex items-center justify-center",children:Ne||e.jsx(De,{})}),x&&w&&!d&&!m&&e.jsx("button",{type:"button",onClick:Te,className:"text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30","aria-label":"Clear input",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),s&&y&&e.jsx("button",{type:"button",className:b("absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full","text-muted-foreground hover:bg-muted/50","focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","transition-colors duration-200",d&&"opacity-50 cursor-not-allowed"),onClick:Fe,"aria-label":v?"Hide password":"Show password",disabled:d,children:v?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),u&&g?e.jsxs("div",{className:"flex items-start",children:[we||e.jsx(Le,{className:"text-destructive mt-0.5 mr-1.5"}),e.jsx("p",{id:H,className:"text-sm text-red-600 dark:text-red-400",children:g})]}):l?e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"h-4 w-4 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0 opacity-70",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{id:O,className:b("text-sm text-gray-600 dark:text-gray-400",h),children:l})]}):null]})});a.displayName="InputField";try{a.displayName="InputField",a.__docgenInfo={description:"A customizable input field component with support for various states and variants.",displayName:"InputField",props:{}}}catch{}const _e={title:"Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:`A flexible and accessible input component with validation states, variants, and sizes.
        
### Features:
- Multiple variants: filled, outlined, ghost
- Responsive design
- Accessible with proper ARIA attributes
- Loading state
- Clear button
- Password visibility toggle
- Customizable styling
- Error states and helper text
- Full keyboard navigation`}}},tags:["autodocs","autodocs"],argTypes:{variant:{control:{type:"select"},options:["filled","outlined","ghost"],description:"The visual style of the input",table:{type:{summary:"filled | outlined | ghost"},defaultValue:{summary:"outlined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the input",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disable the input",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},invalid:{control:"boolean",description:"Mark the input as invalid",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Show a loading spinner",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},showClearButton:{control:"boolean",description:"Show a clear button when input has value",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},isPassword:{control:"boolean",description:"Toggle password visibility",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{control:"text",description:"Label text for the input",table:{type:{summary:"string"}}},helperText:{control:"text",description:"Helper text below the input",table:{type:{summary:"string"}}},errorMessage:{control:"text",description:"Error message to display when invalid",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"}}},containerClassName:{control:"text",description:"Custom class for the container",table:{type:{summary:"string"}}},labelClassName:{control:"text",description:"Custom class for the label",table:{type:{summary:"string"}}},inputClassName:{control:"text",description:"Custom class for the input",table:{type:{summary:"string"}}},messageClassName:{control:"text",description:"Custom class for the helper/error message",table:{type:{summary:"string"}}}},args:{onChange:()=>{},onFocus:()=>{},onBlur:()=>{}}},k={args:{label:"Username",placeholder:"Enter your username",helperText:"This is a helper text"},parameters:{docs:{description:{story:"A basic input field with a label and helper text."}}}},S={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Filled Variant"}),e.jsx(a,{label:"Filled Input",variant:"filled",placeholder:"Type something...",helperText:"Has a subtle background color",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Outlined Variant"}),e.jsx(a,{label:"Outlined Input",variant:"outlined",placeholder:"Type something...",helperText:"Has a border around the input",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Ghost Variant"}),e.jsx(a,{label:"Ghost Input",variant:"ghost",placeholder:"Type something...",helperText:"Minimal style, good for toolbars and headers"})]})]}),parameters:{docs:{description:{story:"InputField comes with three visual variants: filled, outlined, and ghost."}}}},I={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small (sm)"}),e.jsx(a,{size:"sm",placeholder:"Small input",helperText:"Compact size for tight spaces",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Medium (md)"}),e.jsx(a,{size:"md",placeholder:"Medium input (default)",helperText:"Standard size for most forms",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Large (lg)"}),e.jsx(a,{size:"lg",placeholder:"Large input",helperText:"Larger touch target for better mobile experience"})]})]}),parameters:{docs:{description:{story:"InputField comes in three sizes: small (sm), medium (md), and large (lg)."}}}},T={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Disabled State"}),e.jsx(a,{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,helperText:"Cannot be interacted with",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Error State"}),e.jsx(a,{label:"Email",placeholder:"Enter your email",type:"email",invalid:!0,errorMessage:"Please enter a valid email address",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Loading State"}),e.jsx(a,{label:"Search",placeholder:"Searching...",loading:!0,helperText:"Loading results...",containerClassName:"mb-6"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Read-only State"}),e.jsx(a,{label:"Account ID",value:"ACC-123456",readOnly:!0,helperText:"This field is read-only"})]})]}),parameters:{docs:{description:{story:"InputField supports various states like disabled, error, loading, and read-only."}}}},F={render:()=>{const[t,i]=o.useState("Clear me!");return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"With Clear Button"}),e.jsx(a,{label:"Search",value:t,onChange:r=>i(r.target.value),showClearButton:!0,placeholder:"Type to search...",helperText:"The clear button appears when there's text in the input"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Custom Clear Button"}),e.jsx(a,{label:"With Custom Styling",value:t,onChange:r=>i(r.target.value),showClearButton:!0,inputClassName:"pr-10",containerClassName:"relative",helperText:"Custom styling can be applied to the clear button",helperTextClassName:"text-sm text-muted-foreground"})]})]})},parameters:{docs:{description:{story:"InputField can show a clear button when there is text in the input."}}}},P={render:()=>{const[t,i]=o.useState("mySecurePassword123"),[r,p]=o.useState(""),l=r===t&&r!=="";return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Password Input"}),e.jsx(a,{label:"Password",type:"password",value:t,onChange:h=>i(h.target.value),isPassword:!0,placeholder:"Enter a strong password",helperText:"Use at least 8 characters with a mix of letters, numbers, and symbols",containerClassName:"mb-6"})]}),e.jsx("div",{children:e.jsx(a,{label:"Confirm Password",type:"password",value:r,onChange:h=>p(h.target.value),isPassword:!0,placeholder:"Confirm your password",invalid:!l&&r!=="",errorMessage:!l&&r!==""?"Passwords do not match":void 0,helperText:l?"Passwords match!":""})})]})},parameters:{docs:{description:{story:"Password input with visibility toggle and confirmation field."}}}},E={render:()=>{const[t,i]=o.useState("");return e.jsxs("div",{className:"space-y-4 w-[400px]",children:[e.jsx(a,{label:"Controlled Input",value:t,onChange:r=>i(r.target.value),helperText:`Character count: ${t.length}`,placeholder:"Type something..."}),e.jsx("button",{onClick:()=>i(""),className:"px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200",children:"Clear Input"})]})}},M={render:()=>{const[t,i]=o.useState({name:"",email:"",phone:"",message:""}),[r,p]=o.useState({}),[l,h]=o.useState(!1),[g,f]=o.useState(!1),m=()=>{const s={};return t.name.trim()||(s.name="Name is required"),t.email?/\S+@\S+\.\S+/.test(t.email)||(s.email="Please enter a valid email"):s.email="Email is required",t.phone&&!/^\+?[0-9\s-()]{10,}$/.test(t.phone)&&(s.phone="Please enter a valid phone number"),t.message?t.message.length<10&&(s.message="Message must be at least 10 characters"):s.message="Message is required",p(s),Object.keys(s).length===0},d=s=>{s.preventDefault(),m()&&(h(!0),setTimeout(()=>{h(!1),f(!0)},1500))},x=(s,y)=>{i(c=>({...c,[s]:y})),r[s]&&p(c=>({...c,[s]:""}))};return g?e.jsx("div",{className:"w-[500px] p-6 bg-card rounded-lg shadow-sm border",children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("svg",{className:"w-8 h-8 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Thank You!"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Your message has been sent successfully."}),e.jsx("button",{onClick:()=>{i({name:"",email:"",phone:"",message:""}),p({}),f(!1)},className:"px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Send Another Message"})]})}):e.jsxs("div",{className:"w-full max-w-md",children:[e.jsxs("div",{className:"mb-6 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Contact Us"}),e.jsx("p",{className:"text-muted-foreground",children:"Fill out the form below and we'll get back to you soon."})]}),e.jsxs("form",{onSubmit:d,className:"space-y-5",children:[e.jsx(a,{label:"Full Name",value:t.name,onChange:s=>x("name",s.target.value),placeholder:"John Doe",errorMessage:r.name,invalid:!!r.name,required:!0,containerClassName:"mb-1"}),e.jsx(a,{label:"Email Address",type:"email",value:t.email,onChange:s=>x("email",s.target.value),placeholder:"you@example.com",errorMessage:r.email,invalid:!!r.email,required:!0,containerClassName:"mb-1"}),e.jsx(a,{label:"Phone Number (Optional)",value:t.phone,onChange:s=>x("phone",s.target.value),placeholder:"+1 (555) 123-4567",errorMessage:r.phone,invalid:!!r.phone,containerClassName:"mb-1"}),e.jsxs("div",{children:[e.jsx(a,{label:"Your Message",value:t.message,onChange:s=>x("message",s.target.value),placeholder:"How can we help you?",errorMessage:r.message,invalid:!!r.message,required:!0,className:"min-h-[120px]",containerClassName:"mb-1"}),e.jsxs("div",{className:"text-right text-sm text-muted-foreground mt-1",children:[t.message.length,"/500"]})]}),e.jsx("div",{className:"pt-2",children:e.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:l?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):"Send Message"})})]})]})},parameters:{layout:"centered",docs:{description:{story:"A complete contact form example with validation and submission state."}}}},A={render:()=>e.jsx("div",{className:"space-y-8 w-[500px]",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Accessible InputField"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"The InputField component is built with accessibility in mind, following WAI-ARIA best practices."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Keyboard Navigation"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-muted-foreground",children:[e.jsxs("li",{children:["Press ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded border border-border text-xs",children:"Tab"})," to navigate between form controls"]}),e.jsxs("li",{children:["Press ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded border border-border text-xs",children:"Enter"})," or ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded border border-border text-xs",children:"Space"})," to toggle password visibility"]}),e.jsxs("li",{children:["Press the clear button with ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded border border-border text-xs",children:"Enter"})," or ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded border border-border text-xs",children:"Space"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Screen Reader Support"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-muted-foreground",children:[e.jsx("li",{children:"Labels are properly associated with inputs"}),e.jsx("li",{children:"Error messages are announced when they appear"}),e.jsx("li",{children:"Required fields are indicated with an asterisk (*)"}),e.jsx("li",{children:"Password visibility toggle has appropriate ARIA labels"})]})]}),e.jsx("div",{className:"pt-4",children:e.jsx(a,{label:"Try it out",placeholder:"Type something to test keyboard navigation",helperText:"Use the keyboard to navigate and interact with this input",showClearButton:!0,containerClassName:"max-w-md"})})]})]})}),parameters:{docs:{description:{story:"The InputField component is built with accessibility in mind, following WAI-ARIA best practices."}}}};var U,Y,$;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text'
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic input field with a label and helper text.'
      }
    }
  }
  // Play function removed to avoid @storybook/test dependency
}`,...($=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,J,K;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-lg font-medium mb-2">Filled Variant</h3>
        <InputField label="Filled Input" variant="filled" placeholder="Type something..." helperText="Has a subtle background color" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Outlined Variant</h3>
        <InputField label="Outlined Input" variant="outlined" placeholder="Type something..." helperText="Has a border around the input" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Ghost Variant</h3>
        <InputField label="Ghost Input" variant="ghost" placeholder="Type something..." helperText="Minimal style, good for toolbars and headers" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'InputField comes with three visual variants: filled, outlined, and ghost.'
      }
    }
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-2">Small (sm)</h3>
        <InputField size="sm" placeholder="Small input" helperText="Compact size for tight spaces" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Medium (md)</h3>
        <InputField size="md" placeholder="Medium input (default)" helperText="Standard size for most forms" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Large (lg)</h3>
        <InputField size="lg" placeholder="Large input" helperText="Larger touch target for better mobile experience" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'InputField comes in three sizes: small (sm), medium (md), and large (lg).'
      }
    }
  }
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-base font-medium mb-2">Disabled State</h3>
        <InputField label="Disabled Input" placeholder="This input is disabled" disabled helperText="Cannot be interacted with" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Error State</h3>
        <InputField label="Email" placeholder="Enter your email" type="email" invalid errorMessage="Please enter a valid email address" containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Loading State</h3>
        <InputField label="Search" placeholder="Searching..." loading helperText="Loading results..." containerClassName="mb-6" />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Read-only State</h3>
        <InputField label="Account ID" value="ACC-123456" readOnly helperText="This field is read-only" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'InputField supports various states like disabled, error, loading, and read-only.'
      }
    }
  }
}`,...(se=(te=T.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,re,ne;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Clear me!');
    return <div className="space-y-6 w-[400px]">
        <div>
          <h3 className="text-base font-medium mb-2">With Clear Button</h3>
          <InputField label="Search" value={value} onChange={e => setValue(e.target.value)} showClearButton placeholder="Type to search..." helperText="The clear button appears when there's text in the input" />
        </div>
        
        <div>
          <h3 className="text-base font-medium mb-2">Custom Clear Button</h3>
          <InputField label="With Custom Styling" value={value} onChange={e => setValue(e.target.value)} showClearButton inputClassName="pr-10" // Add padding to prevent text under the clear button
        containerClassName="relative" helperText="Custom styling can be applied to the clear button" helperTextClassName="text-sm text-muted-foreground" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'InputField can show a clear button when there is text in the input.'
      }
    }
  }
  // Play function removed to avoid @storybook/test dependency
}`,...(ne=(re=F.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,le;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('mySecurePassword123');
    const [confirmPassword, setConfirmPassword] = useState('');
    const passwordsMatch = confirmPassword === password && confirmPassword !== '';
    return <div className="space-y-6 w-[400px]">
        <div>
          <h3 className="text-base font-medium mb-2">Password Input</h3>
          <InputField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} isPassword placeholder="Enter a strong password" helperText="Use at least 8 characters with a mix of letters, numbers, and symbols" containerClassName="mb-6" />
        </div>
        
        <div>
          <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} isPassword placeholder="Confirm your password" invalid={!passwordsMatch && confirmPassword !== ''} errorMessage={!passwordsMatch && confirmPassword !== '' ? 'Passwords do not match' : undefined} helperText={passwordsMatch ? 'Passwords match!' : ''} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input with visibility toggle and confirmation field.'
      }
    }
  }
  // Play function removed to avoid @storybook/test dependency
}`,...(le=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,me,ce;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4 w-[400px]">
        <InputField label="Controlled Input" value={value} onChange={e => setValue(e.target.value)} helperText={\`Character count: \${value.length}\`} placeholder="Type something..." />
        <button onClick={() => setValue('')} className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">
          Clear Input
        </button>
      </div>;
  }
}`,...(ce=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ue,pe,he;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (formData.phone && !/^\\+?[0-9\\s-()]{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.message) {
        newErrors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1500);
      }
    };
    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: ''
        }));
      }
    };
    if (isSubmitted) {
      return <div className="w-[500px] p-6 bg-card rounded-lg shadow-sm border">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">Your message has been sent successfully.</p>
            <button onClick={() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: ''
            });
            setErrors({});
            setIsSubmitted(false);
          }} className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Send Another Message
            </button>
          </div>
        </div>;
    }
    return <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField label="Full Name" value={formData.name} onChange={e => handleChange('name', e.target.value)} placeholder="John Doe" errorMessage={errors.name} invalid={!!errors.name} required containerClassName="mb-1" />
          
          <InputField label="Email Address" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="you@example.com" errorMessage={errors.email} invalid={!!errors.email} required containerClassName="mb-1" />
          
          <InputField label="Phone Number (Optional)" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+1 (555) 123-4567" errorMessage={errors.phone} invalid={!!errors.phone} containerClassName="mb-1" />
          
          <div>
            <InputField label="Your Message" value={formData.message} onChange={e => handleChange('message', e.target.value)} placeholder="How can we help you?" errorMessage={errors.message} invalid={!!errors.message} required
          // Removed multiline prop as it's not part of InputFieldProps
          className="min-h-[120px]" containerClassName="mb-1" />
            <div className="text-right text-sm text-muted-foreground mt-1">
              {formData.message.length}/500
            </div>
          </div>
          
          <div className="pt-2">
            <button type="submit" disabled={isSubmitting} className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {isSubmitting ? <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </> : 'Send Message'}
            </button>
          </div>
        </form>
      </div>;
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A complete contact form example with validation and submission state.'
      }
    }
  }
}`,...(he=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,xe,ge;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 w-[500px]">
      <div>
        <h2 className="text-xl font-bold mb-4">Accessible InputField</h2>
        <p className="text-muted-foreground mb-6">
          The InputField component is built with accessibility in mind, following WAI-ARIA best practices.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium mb-3">Keyboard Navigation</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Press <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Tab</kbd> to navigate between form controls</li>
              <li>Press <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Space</kbd> to toggle password visibility</li>
              <li>Press the clear button with <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Space</kbd></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-3">Screen Reader Support</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Labels are properly associated with inputs</li>
              <li>Error messages are announced when they appear</li>
              <li>Required fields are indicated with an asterisk (*)</li>
              <li>Password visibility toggle has appropriate ARIA labels</li>
            </ul>
          </div>
          
          <div className="pt-4">
            <InputField label="Try it out" placeholder="Type something to test keyboard navigation" helperText="Use the keyboard to navigate and interact with this input" showClearButton containerClassName="max-w-md" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The InputField component is built with accessibility in mind, following WAI-ARIA best practices.'
      }
    }
  }
}`,...(ge=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const Ue=["Default","Variants","Sizes","States","WithClearButton","PasswordInput","ControlledInput","FormExample","AccessibilityExample"];export{A as AccessibilityExample,E as ControlledInput,k as Default,M as FormExample,P as PasswordInput,I as Sizes,T as States,S as Variants,F as WithClearButton,Ue as __namedExportsOrder,_e as default};
