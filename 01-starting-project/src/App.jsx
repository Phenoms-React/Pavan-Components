import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';




// another way of passing parameters by destructering the array
// function CoreConcept({image,title,description}) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }


function App() {

const [selectedTopic, setSelectedTopic] = useState('Please click a button')


  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
   // console.log(selectedTopic)
    
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {/* <CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
            /> */}
            {/* can be used only the props names are same */}
            <CoreConcept {...CORE_CONCEPTS[0]}  />
              {/* <CoreConcept title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image} 
            /> */}
             <CoreConcept {...CORE_CONCEPTS[1]}  />
              {/* <CoreConcept title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image} 
            /> */}
             <CoreConcept {...CORE_CONCEPTS[2]}  />
              {/* <CoreConcept title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image} 
            /> */}
             <CoreConcept {...CORE_CONCEPTS[3]}  />
      
          </ul>
        </section>
        <section  id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('Components')}>Component</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>

          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
