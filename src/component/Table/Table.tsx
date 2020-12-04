import React from "react";
import styled from "styled-components";
import { Person } from "../../type/Data";

interface Props {
	data?: Array<Person>,
	onSort: (field: string) => void,
	sort: string,
	sortField?: string,
	onRowSelect: (item: Person) => void
}

const Table = ({ data, onSort, sort, sortField, onRowSelect}: Props) => (
	<TableGrid>
		<THEAD>
		<TR>
			<TH className={"th"} onClick={() => onSort("id")}>ID {sortField === "id" ? <small>{sort}</small> : null}</TH>
			<TH className={"th"} onClick={() => onSort("firstName")}>First Name {sortField === "firstName" ? <small>{sort}</small> : null}</TH>
			<TH className={"th"} onClick={() => onSort("lastName")}>Last Name {sortField === "lastName" ? <small>{sort}</small> : null}</TH>
			<TH className={"th"} onClick={() => onSort("email")}>E-mail {sortField === "email" ? <small>{sort}</small> : null}</TH>
			<TH className={"th"} onClick={() => onSort("phone")}>Phone {sortField === "phone" ? <small>{sort}</small> : null}</TH>
		</TR>
		</THEAD>
		<tbody>
			{
				data?.map((item: Person) => (
					<TR key={item.id + item.phone} onClick={() => onRowSelect(item)}>
						<TD className={'td'}>{item.id}</TD>
						<TD className={'td'}>{item.firstName}</TD>
						<TD className={'td'}>{item.lastName}</TD>
						<TD className={'td'}>{item.email}</TD>
						<TD className={'td'}>{item.phone}</TD>
					</TR>
				))
			}
		</tbody>
	</TableGrid>
);

const TableGrid = styled.table`
	width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
`;

const THEAD = styled.thead`
  visibility: hidden;
  background: #fafafa;
	@media screen and (min-width: 600px) {
    visibility: visible;
	}
`

const TR = styled.tr`
	border: 1px solid #ddd;
	border-bottom: 2px solid #ddd;
	padding: 5px;
	margin-bottom: 10px;
	display: block;
	@media screen and (min-width: 600px) {
		display: table-row;
		border-bottom-width: 1px;
		margin-bottom: 0;
	}
	&:nth-child(even) {
		background: #fafafa;
	}
`


const TH = styled.th`
	
	padding: 10px;
	cursor: pointer;
	text-align: left;
	text-transform: uppercase;
	font-size: 11px;
`;

const TD = styled.td`
	padding: 10px;
	text-align: right;
	display: block;
	font-size: 13px;
	border-bottom: 1px dotted #ddd;
	&:last-child {
		border-bottom: none;
	}
	@media screen and (min-width: 600px) {
		display: table-cell;
		text-align: left;
		font-size: 14px;
		border-bottom: none;
	}
	&:before {
		content: attr(data-label);
		float: left;
		text-transform: uppercase;
		font-weight: bold;
		@media screen and (min-width: 600px) {
			content: '';
			display: none;
		}
	}
`

export default Table;
