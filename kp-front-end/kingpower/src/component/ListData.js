import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import { connect } from 'react-redux';

class ListData extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            page: 0,
            rowsPerPage: 10,
        }
        
    }

    render() {

        const StyledTableCell = withStyles(theme => ({
            head: {
                backgroundColor: "#E8EFF5",
                color: "#212529",
                fontSize: 16,
                fontWeight: "Bold"
            },
            body: {
                fontSize: 16,
            },
          }))(TableCell);
          
          const StyledTableRow = withStyles(theme => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.background.default,
                },
            },
          }))(TableRow);
          
          const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.page.length - this.state.page * this.state.rowsPerPage);
          
        return (
            <div className="card-body">
              {console.log(this.props.datas.pages)}
              <TableContainer component={Paper}>
              <TablePagination
                      rowsPerPageOptions={[10, 25, 50]}
                      component="div"
                      count={this.props.datas.pages.length}
                      rowsPerPage={this.state.rowsPerPage}
                      page={this.state.page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                <Table className={StyledTableCell} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell>Gender</StyledTableCell>
                          <StyledTableCell>Mobile Phone</StyledTableCell>
                          <StyledTableCell>Nationality</StyledTableCell>
                          <StyledTableCell width="120">#</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                      this.props.datas.pages.slice(this.state.page * this.state.rowsPerPage,
                        this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((data, i) => {
                      return (
                            <StyledTableRow key={data.id}>
                              <StyledTableCell>{data.firstname+' '+data.lastname}</StyledTableCell>
                              <StyledTableCell>{data.gender}</StyledTableCell>
                              <StyledTableCell>{data.phone}</StyledTableCell>
                              <StyledTableCell>{data.nation}</StyledTableCell>
                              <StyledTableCell>
                              <button className="edit" onClick={() => this.props.dispatch({type:'VIEW', id:data.id})}>Edit</button>
                              <button className="del" onClick={() => this.props.dispatch({type:'DELETE', id:data.id})}>Delete</button>
                              </StyledTableCell>
                            </StyledTableRow>)
                          })
                      }
                      {emptyRows > 0 && (
                        <StyledTableRow>
                          <StyledTableCell colSpan={6} />
                        </StyledTableRow>
                        )
                      }
                      </TableBody>
                    </Table>
                </TableContainer>
              </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datas: state
    }
}

export default connect(mapStateToProps)(ListData);