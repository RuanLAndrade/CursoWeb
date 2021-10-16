let calcStudentAverage = function (codStudent, note01, note02, note03) {
  let notes = []
  notes.push(note01,note02,note03)
  notes.sort((a,b) => a < b ? 1 : -1)

  let mediaFinal = (notes[0] * 4 + notes[1] * 3 + notes[2] * 3)/10
  console.log(`Code Student :${codStudent}, Notes: ${note01}, ${note02}, ${note03}, ${mediaFinal < 5 ? 'Reproved.' : 'Approved.'}`)

}

calcStudentAverage(777, 5.6, 10, 9)