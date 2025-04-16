import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from ".";

/**
 * Este componente `Table` se utiliza para mostrar datos tabulares de manera estructurada.
 * 
 * ### Uso:
 * Puedes personalizar las columnas y los datos que se muestran en la tabla mediante las props `columns` y `data`.
 * 
 * #### Ejemplo:
 * ```tsx
 * <Table
 *   data={[{ id: 1, name: 'John Doe', age: 28 }, { id: 2, name: 'Jane Smith', age: 34 }]}
 *   columns={[{ header: 'ID', accessor: 'id' }, { header: 'Name', accessor: 'name' }]}
 * />
 * ```
 */

type TableProps = React.ComponentProps<typeof Table>;

const meta: Meta<TableProps> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  Este componente \`Table\` se utiliza para mostrar datos tabulares de manera estructurada.

  #### Ejemplo:
  \`\`\`tsx
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell>Encabezado 1</TableCell>
        <TableCell>Encabezado 2</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Dato 1</TableCell>
        <TableCell>Dato 2</TableCell>
      </TableRow>
    </TableBody>
  </Table >
  \`\`\`

  Para una tabla mas compleja, puedes instalar \`npm install @tanstack/react-table\`
        `,
      },
    },
  },
};

export default meta;

type TableStory = StoryObj<TableProps>;

export const Default: TableStory = {
  render: () => {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {["Invoice", "Payment Status", "Payment Method", "Total Amount"].map(
              (heading) => (
                <TableHead key={heading}>{heading}</TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
};



const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];