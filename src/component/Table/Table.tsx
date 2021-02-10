import React from "react";
import './table.css';
import { Person } from "../../type/Data";

interface Props {
	data?: Array<Person>,
	onSort: (field: string) => void,
	sort: string,
	sortField?: string,
	onRowSelect: (item: Person) => void
}

const Table = ({ data, onSort, sort, sortField, onRowSelect}: Props) => (
	<table>
		<thead>
		<tr>
			<th onClick={() => onSort("id")}>ID {sortField === "id" ? <small>{sort}</small> : null}</th>
			<th onClick={() => onSort("firstName")}>First Name {sortField === "firstName" ? <small>{sort}</small> : null}</th>
			<th onClick={() => onSort("lastName")}>Last Name {sortField === "lastName" ? <small>{sort}</small> : null}</th>
			<th onClick={() => onSort("email")}>E-mail {sortField === "email" ? <small>{sort}</small> : null}</th>
			<th onClick={() => onSort("phone")}>Phone {sortField === "phone" ? <small>{sort}</small> : null}</th>
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

export default Table;
