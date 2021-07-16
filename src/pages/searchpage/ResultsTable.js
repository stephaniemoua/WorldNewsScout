import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArticleFragment from './ArticleFragment';
import ArticleCard from './ArticleCard';
import './ResultsTable.css'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const styles = theme => ({
  tableRow: {
      "&:hover": {
        backgroundColor: "blue !important"
      }
    }
  });

function createData(country, rating, conflvl, numArticles, numDayArticles, articlesList) {
  return {
    country,
    rating,
    conflvl,
    numArticles,
    numDayArticles,
    articlesList,
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} hover>
        {/*Icon on left to expand the row */}
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.country}</TableCell>
        <TableCell align="right">{row.rating}</TableCell>
        <TableCell align="right">{row.conflvl}</TableCell>
        <TableCell align="right">{row.numArticles}</TableCell>
        <TableCell align="right">{row.numDayArticles}</TableCell>
      </TableRow>


      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <ArticleFragment />
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className='tableHead'>
          <TableRow>
          
            <TableCell />
            <TableCell ><div className='table_header'>Country</div></TableCell>
            <TableCell align="right"><div className='table_header'>Rating</div></TableCell>
            <TableCell align="right"><div className='table_header'>Confidence (%)</div></TableCell>
            <TableCell align="right"><div className='table_header'>Articles(last 7 days)</div></TableCell>
            <TableCell align="right"><div className='table_header'>Articles(last 24 hr)</div></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    country: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    conflvl: PropTypes.number.isRequired,
    numArticles: PropTypes.number.isRequired,
    numDayArticles: PropTypes.number.isRequired,
    articlesList: PropTypes.arrayOf(ArticleCard).isRequired,
  }).isRequired,
};

const rows = [
  createData('United States', 'positive', 90, 52, 11, ArticleFragment),
  createData('Canada', 'neutral', 87, 24, 9, ArticleFragment),
  createData('United Kingdom', 'positive', 78, 12, 8, ArticleFragment),
  createData('Australia', 'negative', 86, 23, 7, ArticleFragment),
];