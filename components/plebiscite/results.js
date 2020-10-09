
import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import firebase from 'utils/firebase';

const db = firebase.firestore();

const resultsTable = () => {
  const [accCounts, setAccCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [bmCounts, setBmCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [csCounts, setCsCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [humletCounts, setHumletCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [nsmCounts, setNsmCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [seaCounts, setSeaCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [soeCounts, setSoeCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [sonCounts, setSonCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const [ssCounts, setSsCounts] = React.useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  })

  const getCount = () => {
    db.collection('statistics').doc('cluster_count').collection('acc').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setAccCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('bm').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setBmCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('cs').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setCsCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('humlet').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setHumletCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('nsm').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setNsmCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('sea').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setSeaCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('soe').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setSoeCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('son').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setSonCounts(data);
    })

    db.collection('statistics').doc('cluster_count').collection('ss').doc('count')
    .get().then((snapshot) => {
      let data = snapshot.data();
      setSsCounts(data);
    })

  }

  React.useEffect(() => {
    getCount();
  }, [])

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table stickyHeader style={{ width: '100%' }}>
        <caption><b>Total Voters: {
          accCounts.first + accCounts.second + accCounts.third + accCounts.fourth + accCounts.fifth +
          bmCounts.first + bmCounts.second + bmCounts.third + bmCounts.fourth + bmCounts.fifth +
          csCounts.first + csCounts.second + csCounts.third + csCounts.fourth + csCounts.fifth +
          humletCounts.first + humletCounts.second + humletCounts.third + humletCounts.fourth + humletCounts.fifth +
          nsmCounts.first + nsmCounts.second + nsmCounts.third + nsmCounts.fourth + nsmCounts.fifth +
          seaCounts.first + seaCounts.second + seaCounts.third + seaCounts.fourth + seaCounts.fifth +
          sonCounts.first + sonCounts.second + sonCounts.third + sonCounts.fourth + sonCounts.fifth +
          soeCounts.first + soeCounts.second + soeCounts.third + soeCounts.fourth + soeCounts.fifth +
          ssCounts.first + ssCounts.second + ssCounts.third + ssCounts.fourth + ssCounts.fifth
        }</b></caption>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">1st Year</TableCell>
            <TableCell align="right">2nd Year</TableCell>
            <TableCell align="right">3rd Year</TableCell>
            <TableCell align="right">4th Year</TableCell>
            <TableCell align="right">5th Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              ACC
            </TableCell>
            <TableCell align="right"><b>{accCounts.first + accCounts.second + accCounts.third + accCounts.fourth + accCounts.fifth}</b></TableCell>
            <TableCell align="right">{accCounts.first}</TableCell>
            <TableCell align="right">{accCounts.second}</TableCell>
            <TableCell align="right">{accCounts.third}</TableCell>
            <TableCell align="right">{accCounts.fourth}</TableCell>
            <TableCell align="right">{accCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              BM
            </TableCell>
            <TableCell align="right"><b>{bmCounts.first + bmCounts.second + bmCounts.third + bmCounts.fourth + bmCounts.fifth}</b></TableCell>
            <TableCell align="right">{bmCounts.first}</TableCell>
            <TableCell align="right">{bmCounts.second}</TableCell>
            <TableCell align="right">{bmCounts.third}</TableCell>
            <TableCell align="right">{bmCounts.fourth}</TableCell>
            <TableCell align="right">{bmCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              CS
            </TableCell>
            <TableCell align="right"><b>{csCounts.first + csCounts.second + csCounts.third + csCounts.fourth + csCounts.fifth}</b></TableCell>
            <TableCell align="right">{csCounts.first}</TableCell>
            <TableCell align="right">{csCounts.second}</TableCell>
            <TableCell align="right">{csCounts.third}</TableCell>
            <TableCell align="right">{csCounts.fourth}</TableCell>
            <TableCell align="right">{csCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              HUMLET
            </TableCell>
            <TableCell align="right"><b>{humletCounts.first + humletCounts.second + humletCounts.third + humletCounts.fourth + humletCounts.fifth}</b></TableCell>
            <TableCell align="right">{humletCounts.first}</TableCell>
            <TableCell align="right">{humletCounts.second}</TableCell>
            <TableCell align="right">{humletCounts.third}</TableCell>
            <TableCell align="right">{humletCounts.fourth}</TableCell>
            <TableCell align="right">{humletCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              NSM
            </TableCell>
            <TableCell align="right"><b>{nsmCounts.first + nsmCounts.second + nsmCounts.third + nsmCounts.fourth + nsmCounts.fifth}</b></TableCell>
            <TableCell align="right">{nsmCounts.first}</TableCell>
            <TableCell align="right">{nsmCounts.second}</TableCell>
            <TableCell align="right">{nsmCounts.third}</TableCell>
            <TableCell align="right">{nsmCounts.fourth}</TableCell>
            <TableCell align="right">{nsmCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              SEA
            </TableCell>
            <TableCell align="right"><b>{seaCounts.first + seaCounts.second + seaCounts.third + seaCounts.fourth + seaCounts.fifth}</b></TableCell>
            <TableCell align="right">{seaCounts.first}</TableCell>
            <TableCell align="right">{seaCounts.second}</TableCell>
            <TableCell align="right">{seaCounts.third}</TableCell>
            <TableCell align="right">{seaCounts.fourth}</TableCell>
            <TableCell align="right">{seaCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              SON
            </TableCell>
            <TableCell align="right"><b>{sonCounts.first + sonCounts.second + sonCounts.third + sonCounts.fourth + sonCounts.fifth}</b></TableCell>
            <TableCell align="right">{sonCounts.first}</TableCell>
            <TableCell align="right">{sonCounts.second}</TableCell>
            <TableCell align="right">{sonCounts.third}</TableCell>
            <TableCell align="right">{sonCounts.fourth}</TableCell>
            <TableCell align="right">{sonCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              SOE
            </TableCell>
            <TableCell align="right"><b>{soeCounts.first + soeCounts.second + soeCounts.third + soeCounts.fourth + soeCounts.fifth}</b></TableCell>
            <TableCell align="right">{soeCounts.first}</TableCell>
            <TableCell align="right">{soeCounts.second}</TableCell>
            <TableCell align="right">{soeCounts.third}</TableCell>
            <TableCell align="right">{soeCounts.fourth}</TableCell>
            <TableCell align="right">{soeCounts.fifth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              SS
            </TableCell>
            <TableCell align="right"><b>{ssCounts.first + ssCounts.second + ssCounts.third + ssCounts.fourth + ssCounts.fifth}</b></TableCell>
            <TableCell align="right">{ssCounts.first}</TableCell>
            <TableCell align="right">{ssCounts.second}</TableCell>
            <TableCell align="right">{ssCounts.third}</TableCell>
            <TableCell align="right">{ssCounts.fourth}</TableCell>
            <TableCell align="right">{ssCounts.fifth}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default resultsTable;