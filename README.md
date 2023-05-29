
 basic react code

const root=ReactDoM.createRoot(document.getElementById('root'))
//root.render(
    <> 
   <Navbar data="hey this is prop ehich is used he pass the data" main="hey props" />
                               
   <h1                             // jsx code not html code   prevous line 15 is React Fragment's sugar from
     align="center" 
     style={{//color:"red"}}           // in this way we use inline css in jsx react js

    // style={headstyle}                  // internal css
   //  className="heading"> 
   // {tech} is super easy
   //  </h1>
   //  <p>
   //  {desc}
   //  </p>
  //  <Footer/>
   
   //  </>
//)





# What is React js?
1. React is FrontEnd javascript library used to develop awesome UI/UX
2. React uses component based structure
3. Its fast as it uses virtual dom
4. Developed by Meta, most popular library oif javascript

# why React js?
1. Fast
2. Simple to understand
3. Fallow es6
4. Great community


# Understanding Folder structure
1. ReadMe.md is about documenting your project
2. package.Json: meta data about project
3. gitigore: to ignore files/folder while sharing them

# Thinkering code
1. React-script: used to start,debug,build,test react project
2. ReactDOM:used to connect index.html with index.js
3. React: it is used to handle jsx

# Understanding JSX
1. javascript and xml
2. Rules of jsx
   2.1. Ending tag is must 
   2.2. class --> className (instead of writing class="" we need to write className=""  in jsx)
   2.3. kebab-case --> we use jsx as  '' cameCase''
   2.4. anykind of javascript we need to write in xml jsx we need use {} this brackets ...in it 
   2.5. jsx elements needs to be enclose in to one tag that means in a render() function we need to use <Div> tag to use differenteleemnts tags in one function ("using div will get problem so we use <React fragment></React fragment>)

//elements--> tag--> root
//React js: avoid var❌ use const, let ✔️
//<></>  React Fragment's sugar from

 # styling
 1. inline
 2. internal
 3. external 

# Components
1. rules
   1.1: Components name should begin with capital letter
   1.2: It should  have statement
2. 2 types: class based and function based<jsx>

# props
1. pass data from parent componenet to child component

# Babel js: Trans compilers  it converts complex javaScript in to normal one .

////*** interview purpose imp
# 1.uncontrolled vs 2.controlled states
1. you can not really control the data  what kind of data  inserting whicxh is uncontrolled .... syntax : {useRef}

2. you can control everything the data what you are inserting
we use {useState}

# Netflify-->posrtal  hoisting website