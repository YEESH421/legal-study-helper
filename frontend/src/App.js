import './App.css';
import Uploader from './Uploader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'
import { Parser } from '@json2csv/plainjs';
import { useState, useEffect } from "react";

function App() {
  const [paperData, setPaperData] = useState([])
  const downloadCsv = () => {
    try {
      const parser = new Parser();
      const csv = parser.parse(paperData);
      const file = new Blob([csv])
      const url = window.URL.createObjectURL(file)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', "study-data.csv")
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => console.log(paperData), [paperData])
  return (
    <div>
      <div style={{ display: "block" }}>
        <Uploader paperData={paperData} setPaperData={setPaperData} style={{ float: 'left' }}></Uploader>
        <Button variant="contained" style={{ float: 'right', marginRight: '2vw' }} disabled={paperData.length === 0} onClick={downloadCsv}>Download CSV</Button>
      </div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Authors</TableCell>
              <TableCell>Abstract</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Time/Duration</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Conclusion</TableCell>
              <TableCell>Strength of Data</TableCell>
              <TableCell>Weaknesses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paperData.map((row, index) => {
              const weaknesses = row.weaknesses.join(',')
              return (
                <TableRow key={index}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.authors}</TableCell>
                  <TableCell>{row.abstract}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.conclusion}</TableCell>
                  <TableCell>{row.strength}</TableCell>
                  <TableCell>{weaknesses}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
