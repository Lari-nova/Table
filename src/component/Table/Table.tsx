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
	<table className="table">
		<thead>
		<tr>
			<TH onClick={() => onSort("id")}>ID {sortField === "id" ? <small>{sort}</small> : null}</TH>
			<TH onClick={() => onSort("firstName")}>First Name {sortField === "firstName" ? <small>{sort}</small> : null}</TH>
			<TH onClick={() => onSort("lastName")}>Last Name {sortField === "lastName" ? <small>{sort}</small> : null}</TH>
			<TH onClick={() => onSort("email")}>E-mail {sortField === "email" ? <small>{sort}</small> : null}</TH>
			<TH onClick={() => onSort("phone")}>Phone {sortField === "phone" ? <small>{sort}</small> : null}</TH>
		</tr>
		</thead>
		<tbody>
			{
				data?.map((item: Person) => (
					<tr key={item.id + item.phone} onClick={() => onRowSelect(item)}>
						<td>{item.id}</td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.email}</td>
						<td>{item.phone}</td>
					</tr>
				))
			}
		</tbody>
	</table>
);

const TH = styled.th`
	cursor: pointer;
`;

export default Table;
