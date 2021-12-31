import React, { Component } from "react";
import Header from "./components/Header";
import BubbleSort from "./components/sort/BubbleSort";
import SelectionSort from "./components/sort/SelectionSort";
import InsertionSort from "./components/sort/InsertionSort";
import MergeSort from "./components/sort/MergeSort";
import QuickSort from "./components/sort/QuickSort";
import HeapSort from "./components/sort/HeapSort";
import CountingSort from "./components/sort/CountingSort";
import RadixSort from "./components/sort/RadixSort";
import BucketSort from "./components/sort/BucketSort";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">Sorting Algorithm</h2>
        <div className="start">
          <Header />
        </div>
        <div>
          <h3>Average time complexity: O(n²)</h3>
          <div className="row">
            <BubbleSort />
            <SelectionSort />
            <InsertionSort />
          </div>
          <h3>Average time complexity: O(nlog n)</h3>
          <div className="row">
            <MergeSort />
            <QuickSort />
            <HeapSort />
          </div>
          <h3>Average time complexity: O(n+k)</h3>
          <div className="row">
            <CountingSort />
            <RadixSort />
            <BucketSort />
          </div>
        </div>
      </div>
    );
  }
}