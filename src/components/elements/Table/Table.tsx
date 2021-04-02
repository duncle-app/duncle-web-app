import React from "react";
import MaterialTable, { Column } from "material-table";
import { Library } from "../../../model";
import { tableIcons } from "../../../common/tableIcons";
import { CardHeader } from "@material-ui/core";
import moment from "moment";
import StackedField from "../../atoms/Table/StackedField";
import { readableDate } from "../../../utils/dateUtil";
import { formatContactType } from "../../../utils/textFormatUtils";
import { getColor } from "../../../utils/colorUtils";

type TableProps = {
  libraries: Library[];
  onEdit?(library: Library): void;
};
export default ({ libraries, onEdit }: TableProps) => {
  const tableColumns: Column<Library>[] = [
    { title: "Library", field: "libraryName" },
    {
      title: "Contact / Aide",
      field: "contactName",
      render: ({ librarian, assistant }: Library) => (
        <StackedField top={librarian} bottom={assistant} />
      ),
    },
    {
      title: "Phone / Email",
      field: "contactInfo",
      render: ({ phoneNumber, email }: Library) => (
        <StackedField top={phoneNumber} bottom={email} />
      ),
    },
    {
      title: "Last Sale / Date",
      field: "lastSaleInfo",
      render: ({ lastSale, dateLastSale }: Library) => {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        });
        const formattedToDollars = formatter.format(lastSale);
        if (dateLastSale !== undefined) {
          dateLastSale = readableDate(dateLastSale);
        }
        return <StackedField top={formattedToDollars} bottom={dateLastSale} />;
      },
    },
    {
      title: "Last Contacted",
      field: "dateLastContact",
      render: ({ dateLastContact, lastContactType }: Library) => {
        const lastContactText =
          dateLastContact !== undefined
            ? readableDate(dateLastContact)
            : dateLastContact;

        return (
          <StackedField
            top={lastContactText}
            bottom={formatContactType(lastContactType)}
          />
        );
      },
    },
    {
      title: "Next Contact",
      field: "dateNextContact",
      defaultSort: "asc",
      render: ({ dateNextContact }: Library) => {
        return dateNextContact !== undefined
          ? readableDate(dateNextContact)
          : dateNextContact;
      },
    },
  ];

  return (
    <>
      <CardHeader title="Libraries" />
      <MaterialTable
        title=" "
        columns={tableColumns}
        data={libraries}
        // @ts-ignore
        icons={tableIcons}
        options={{
          // todo - might have to revisit this.. probably better to do 100 page size, with pagination options
          //  see docs - https://material-table.com/#/docs/all-props
          paging: false,
          rowStyle: ({ dateNextContact, libraryName }: Library) => {
            debugger;
            let nextDate;
            if (dateNextContact) {
              nextDate = moment(dateNextContact).toDate();
            }

            const backgroundColor: string = getColor(nextDate);
            return { backgroundColor };
          },
        }}
        actions={[
          {
            // @ts-ignore
            icon: tableIcons.Create,
            tooltip: "Edit UserDAO",
            // @ts-ignore
            onClick: (event, rowData) => onEdit(rowData),
          },
        ]}
      />
    </>
  );
};
