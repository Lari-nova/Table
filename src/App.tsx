import React, { ChangeEvent } from 'react';
import { Loader } from "./component/Loader/Loader";
import  Table from "./component/Table/Table";
import DetailRowView from "./component/DetailRowView/DetailRowView";
import { Person } from "./type/Data";
import _ from 'lodash';
import ModeSelector from "./component/ModeSelector/ModeSelector";
import ReactPaginate from 'react-paginate';
import TableSearch from "./component/TableSearch/TableSearch";
import ModalForm from "./component/ModalForm/ModalForm";
import styled from "styled-components";

type State = {
  isLoading: boolean,
  data: Array<Person>,
  sort: 'asc' | 'desc',
  sortField: string,
  row: Person | undefined,
  isModeSelected: boolean,
  isShowModal: boolean,
	currentPage: number,
  search: string,
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}

const pageSize = 50;

class App extends React.Component<Object, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      sort: 'asc',
      sortField: '',
      row: undefined,
      isModeSelected: false,
      isShowModal: false,
	    currentPage: 0,
      search: '',
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  }

  async fetching(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
      data: _.orderBy(data, prevState.sortField, prevState.sort)
    }));
  }

  onSort = (sortField: string) => {
    const cloneData = [...this.state.data];
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField: sortField
    });
  };

  onRowSelect = (row: Person) => {
    this.setState({ row: row })
  };

  modeSelectHandler = (url: string) => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    });
    this.fetching(url);
  };

  pageChangeHandler = ({selected}: any) => {
    this.setState({
	    currentPage: selected
    });
  };

  renderPaginate = (pageCount: number) => {
    if (this.state.data.length > pageSize) {
      return (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={this.state.currentPage}
        />
      )
    }
    return null
  };

  searchHandler = (search: string) => {
    this.setState({
      search,
      currentPage: 0
    })
  };

  getFilteredData = () => {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    let result = data.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });

    if(!result.length){
      result = this.state.data
    }
    return result
  };

  handleFormSubmit = () => {
    let items = [...this.state.data];

    items.unshift({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      description: '',
      address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      }
    });
    this.setState({
      data: items
    });
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      ...this.state,
        [name]: value
    });
  };

  renderModalForm = () => {
    if (this.state.isShowModal) {
      return (
        <ModalForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          id={this.state.id}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
        />
        )
    }
    return null
  };

  onClick = () => {
    this.setState(prev => ({isShowModal: !prev.isShowModal}))
  };

  render() {
  	const filteredData = this.getFilteredData();
  	const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

    if(!this.state.isModeSelected) {
      return (
        <ButtonContainer>
          <ModeSelector onSelect={this.modeSelectHandler}/>
        </ButtonContainer>
      )
    }
    return (
      <div>
        {
          this.state.isLoading ? <Loader/> :
            <>
              <TableSearch onSearch={this.searchHandler} onAddClick={this.onClick}/>
              {this.renderModalForm()}
              <Table
              onSort={this.onSort}
              data={displayData}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
            />
            </>
        }
	      {this.state.row ? <DetailRowView person={this.state.row} /> : null}
        {this.renderPaginate(pageCount)}
      </div>
    )
  }
}


const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 -50% 0 0;
  transform: translate(-50%, -50%)
`;

export default App;
