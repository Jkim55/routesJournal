import React, { Component } from 'react'

class PostsNew extends Component {
  componentDidMount() {
    this.create_mark("endCrossPage");
    this.initTask("SinglePage")

    this.crossPageMark("startCrossPage")
    this.showMarks()
    this.showMeasures()
    this.clearAllPerfMetrics()
  }

  initTask(taskName) {
    performance.mark(`start${taskName}`);
    performance.mark(`end${taskName}`);
    this.measurePerf(taskName, `start${taskName}`, `end${taskName}`)
  }

  crossPageMark(startMark){
    const marks = performance.getEntriesByType("mark")
    let matched = marks.filter(mark => mark.name === startMark)
    matched.length > 0 ? this.singlePerfMeasure("CrossPage", startMark, "endCrossPage") : console.log("NO MARKS FOR ", startMark)
  }

  create_mark(name) {
    console.log(`CREATING MARK FOR: ${name}`)
    performance.mark !== undefined ? performance.mark(name): console.log("performance.mark Not supported")
  }

  measurePerf(taskName, startMark, endMark) {
    performance.measure(taskName, startMark, endMark)
    const measured = performance.getEntriesByName(taskName)[0];
    console.log(`NAME: ${measured.name}\n TYPE: ${measured.entryType}\n START TIME: ${measured.startTime}\n DURATION: ${measured.duration*0.001}`);
  }

  singlePerfMeasure(){
      const marks = performance.getEntriesByType("mark");
      marks.map(mark => {
        console.log(`SINGLE PERF FOR MARKS\n NAME: ${mark.name}\n TYPE: ${mark.entryType}\n STARTTIME: ${mark.startTime}\n DURATION: ${mark.duration*0.001}\n`)
      })
  }

  showMarks(){
    const marks = performance.getEntriesByType("mark");
    if (marks.length === 0){
      console.log("NO MARKS")
    }
    marks.map(mark => {
      console.log(`MARKS LEFTOVER\n NAME: ${mark.name}`)
    })
  }

  showMeasures(){
    const measures=performance.getEntriesByType("measure");
    if (measures.length === 0){
      console.log("NO MEASURES")
    }
    measures.map(measure => {
      console.log(`MEASURES LEFTOVER\n NAME: ${measure.name}`)
    })
  }

  clearAllPerfMetrics(){
    performance.clearMarks();
    performance.clearMeasures();
    console.log("CLEARING!!!**************")
    this.showMarks()
    this.showMeasures()
  }

  render() {
    return (
      <div>
        Psssst.. take a look in the console!
      </div>
    )
  }
}

export default PostsNew
