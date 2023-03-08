import React from 'react'
import DataTable from './DataTable'
import {GridRowsProp} from "@mui/x-data-grid/models/gridRows";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";

describe('<DataTable />', () => {
  it('renders', () => {
    const props = {
      loading: true,
      rows: [{
        id: 0,
        name: "name",
        surname: "surname",
      },
        {
          id: 1,
          name: "name 1",
          surname: "surname 1",
        }],
      columns: [
        {field: 'name', headerName: 'Name'},
        {field: 'surname', headerName: 'Surname'},
      ]
    }
    cy.mount(<DataTable {...props} />);
    cy.get('[data-id="0"]>[data-field="name"]').should("have.text", "name");
    cy.get('[data-id="0"]>[data-field="surname"]').should("have.text", "surname");
    cy.get('[data-id="0"]>[data-field="surname"]').should("have.text", "surname");
  }),
    it('filters the datatable', () => {
      const props = {
        loading: true,
        rows: [{
          id: 0,
          name: "name",
          surname: "surname",
        },
          {
            id: 1,
            name: "name 1",
            surname: "surname 1",
          }],
        columns: [
          {field: 'name', headerName: 'Name'},
          {field: 'surname', headerName: 'Surname'},
        ]
      }
      cy.mount(<DataTable {...props} />);
      cy.get('input').type("name 1");
      cy.get('[role="row"]').should("equal", "name 1");
      cy.get('[role="row"]').should("not.equal.text", "name");
    }),
    it('paginates when there are more then 15 items ', () => {
      const props = {
        loading: true,
        rows: Array.from({length: 10}, ((a, i) => ({
          id: i,
          name: "name",
          surname: "surname",
        }))),
        columns: [
          {field: 'name', headerName: 'Name'},
          {field: 'surname', headerName: 'Surname'},
        ]
      }
      cy.mount(<DataTable {...props} />);

      cy.get("nav>li").should("")
    })
})
