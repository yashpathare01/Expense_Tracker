import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  font-family: Montserrat;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  width: 100%;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
  border: 1px solid #e6e8e9;

  span {
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const TransactionComponent = (props) => {
    const [searchText, updateSearchText] = useState("");
    const [filteredTransaction, updateTrans] = useState(props.transaction);

    const filterData = () => {
        let filteredTransactions = [...props.transaction];

        // Filter for the last 30 days
        const currentDate = new Date();
        const past30DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 30));

        filteredTransactions = filteredTransactions.filter((payload) => {
            const transactionDate = new Date(payload.date); // Convert timestamp to Date
            return transactionDate >= past30DaysDate; // Keep only transactions within the last 30 days
        });

        // Filter for search text
        if (searchText && searchText.trim().length) {
            filteredTransactions = filteredTransactions.filter((payload) =>
                payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
            );
        }

        updateTrans(filteredTransactions);
    };

    useEffect(() => {
        filterData();
    }, [searchText, props.transaction]);

    const expenses = filteredTransaction.filter((t) => t.type === "EXPENSE");
    const incomes = filteredTransaction.filter((t) => t.type === "INCOME");

    return (
        <Container>
            <input
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    updateSearchText(e.target.value);
                    filterData();
                }}
            />
            <Section>
                <Title>Expenses</Title>
                {expenses.length ? (
                    expenses.map((payload) => (
                        <Cell key={payload.id} isExpense={true}>
                            <span>{payload.desc}</span> <span>${payload.amount}</span>
                        </Cell>
                    ))
                ) : (
                    <span>No expenses found for the last 30 days.</span>
                )}
            </Section>
            <Section>
                <Title>Income</Title>
                {incomes.length ? (
                    incomes.map((payload) => (
                        <Cell key={payload.id} isExpense={false}>
                            <span>{payload.desc}</span> <span>${payload.amount}</span>
                        </Cell>
                    ))
                ) : (
                    <span>No incomes found for the last 30 days.</span>
                )}
            </Section>
        </Container>
    );
};

export default TransactionComponent;
















// import { useEffect, useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 10px 22px;
//     font-size: 18px;
//     width: 100%;
//     gap: 10px;
//     font-weight: bold;
//     font-family: Montserrat;

//     & input {
//         padding: 10px 12px;
//         border-radius: 12px;
//         background: #e6e8e9;
//         border: 1px solid #e6e8e9;
//         outline: none;
//         width: 100%;
//     }
// `;

// const Cell = styled.div`
//     display: flex;
//     flex-direction: row;
//     padding: 10px 15px;
//     font-size: 14px;
//     border-radius: 2px;
//     align-items: center;
//     font-weight: normal;
//     width: 100%;
//     justify-content: space-between;
//     border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
//     border: 1px solid #e6e8e9;
// `;

// const TransactionCell = (props) => {
//     const date = new Date(props.payload.date).toLocaleDateString(); // Format the date
//     return (
//         <Cell isExpense={props.payload?.type === "EXPENSE"}>
//             <span>{props.payload.desc}</span>
//             <span>${props.payload.amount}</span>
//             <span>{date}</span> {/* Display the date */}
//         </Cell>
//     );
// };

// const TransactionComponent = (props) => {
//     // For search bar
//     const [searchText, updateSearchText] = useState("");
//     const [filteredTransaction, updateTrans] = useState(props.transaction);

//     const filterData = () => {
//         if (!searchText || !searchText.trim().length) {
//             updateTrans(props.transaction);
//             return;
//         }
//         let trans = [...props.transaction];
//         trans = trans.filter((payload) =>
//             payload.desc.toLowerCase().includes(searchText.toLocaleLowerCase().trim())
//         );

//         updateTrans(trans);
//     };

//     useEffect(() => {
//         filterData(searchText);
//     }, [searchText, props.transaction]);

//     return (
//         <Container>
//             Transaction

//             <input
//                 placeholder="Search"
//                 value={searchText}
//                 onChange={(e) => {
//                     updateSearchText(e.target.value);
//                     filterData(e.target.value);
//                 }}
//             />
//             {filteredTransaction?.length ? (
//                 filteredTransaction.map((payload) => <TransactionCell key={payload.id} payload={payload} />)
//             ) : (
//                 ""
//             )}
//         </Container>
//     );
// };

// export default TransactionComponent;





















// // import { type } from "@testing-library/user-event/dist/type";
// // import { useEffect, useState } from "react";
// // import styled from "styled-components";

// // const Container = styled.div`
// // display:flex;
// // flex-direction:column;
// // align-items:flex-start;
// // padding:10px 22px;
// // font-size: 18px;
// // width:100%;
// // gap:10px;
// // font-weight:bold;
// // font-family:Montserrat;

// // & input{
// //     padding:10px 12px;
// //     border-radius:12px;
// //     background:#e6e8e9;
// //     border:1px solid #e6e8e9;
// //     outline:none;
// //     width:100%;
// // }
// // `;

// // const Cell = styled.div`
// // display:flex;
// // flex-direction:row;
// // padding:10px 15px;
// // font-size: 14px;
// // border-radius:2px;
// // align-items:center;
// // font-weight:normal;
// // width:100%;
// // justify-content:space-between;
// // border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
// // border:1px solid #e6e8e9;
// // `;

// // const TransactionCell = (props) => {
// //     return (
// //         <Cell isExpense={props.payload?.type === "EXPENSE"}>
// //             <span>{props.payload.desc}</span>
// //             <span>${props.payload.amount}</span>
// //         </Cell>
// //     );
// // }

// // const TransactionComponent = (props) => {

// //     //for search bar
// //     const [searchText, updateSearchText] = useState("");
// //     const [filteredTransaction, updateTrans] = useState(props.transaction);

// //     const filterData = () => {
// //         if (!searchText || !searchText.trim().length) {
// //             updateTrans(props.transaction);
// //             return;
// //         }
// //         let trans = [...props.transaction];
// //         trans = trans.filter((payload) => payload.desc.toLowerCase().includes(searchText.toLocaleLowerCase().trim()));

// //         updateTrans(trans);
// //     };

// //     useEffect(() => { filterData(searchText); }, [searchText, props.transaction]);

// //     return (
// //         <Container>
// //             Transaction

// //             <input placeholder="Search" value={searchText} onChange={(e) => { updateSearchText(e.target.value); filterData(e.target.value); }} />
// //             {filteredTransaction?.length ? filteredTransaction.map((payload) => <TransactionCell payload={payload} />) : ""}
// //         </Container>
// //     );
// // }

// // export default TransactionComponent;