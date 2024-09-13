import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from './MarkdownEditor';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        style={{ width: '50%', height: '200px', marginBottom: '20px' }}
      />
      <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;


// Function to extract names from an array of objects
function extractNames(data) {
    return data.map(item => item.name);
  }
  
  // Example usage
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const names = extractNames(data);
  console.log(names); // Output: ["Alice", "Bob", "Charlie"]

function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');
  
    // Reverse the array of words
    let reversedWords = words.reverse();
  
    // Join the reversed array back into a sentence
    let reversedSentence = reversedWords.join(' ');
  
    // Capitalize the first letter of the reversed sentence
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1).toLowerCase();
  
    return reversedSentence;
  }
  
  // Example usage
  let inputSentence = "hello world this is a test";
  let outputSentence = reverseSentence(inputSentence);
  console.log(outputSentence); // Output: "Test a is this world hello"


// Function to extract names from an array of arrays of objects
function extractNamesFromNestedArray(data) {
    return data.flatMap(subArray => subArray.map(item => item.name));
  }
  
  // Example usage
  const data = [
    [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 22 }
    ],
    [
      { name: 'Bob', age: 34 }
    ]
  ];
  
  const names = extractNamesFromNestedArray(data);
  console.log(names); // Output: ["John", "Jane", "Bob"]

  
