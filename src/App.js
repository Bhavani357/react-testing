// import Application from "./components/application/application";
// import Skills from "./components/skills/skills";
import Counter from './components/counter/counter'
import Sample from "./components/hooks/csWorldUseRefHook/Sample";
import getApiData from './utils';
function App() {
  // const skills = []
  let product = getApiData('https://fakestoreapi.com/products/1')
  return (
    <div>
      {/* <Application/> */}
      {/* <Skills skills={skills}/> */}
      {/* <Counter/> */}
      {/* <Sample/> */}

      <h1>Custom hooks demo</h1>
      <div>{Object.keys(product)}</div>
      <div>{product.title}</div>
      <div>{product.price}</div>

    </div>
      
  );
}

export default App;
