import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 10px;
    font-family: Montserrat;
    width: 360px;
`;

const HomeComponent = (props) => {
    const [transaction, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const addTransaction = (payload) => {
        const transactionArray = [...transaction];
        const transactionWithDate = { ...payload, date: new Date() }; // Add date
        transactionArray.push(transactionWithDate);
        updateTransaction(transactionArray);
        localStorage.setItem("transactions", JSON.stringify(transactionArray)); // Save to local storage
    };


    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;

        transaction.map((payload) => {
            payload.type === "EXPENSE" ? (exp += payload.amount) : (inc += payload.amount);
        });

        updateExpense(exp);
        updateIncome(inc);
    };

    useEffect(() => {
        // Fetch transactions from local storage
        const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        const today = new Date();
        const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));

        // Filter transactions from the last 30 days
        const filteredTransactions = storedTransactions.filter((tran) => {
            const tranDate = new Date(tran.date);
            return tranDate >= thirtyDaysAgo;
        });

        updateTransaction(filteredTransactions);
    }, []);

    useEffect(() => calculateBalance(), [transaction]);

    return (
        <Container>
            Track your daily expenses effortlessly
            <OverviewComponent
                addTransaction={addTransaction}
                expense={expense}
                income={income}
                transaction={transaction} // Pass transaction state here
            />
        </Container>
    );
};

export default HomeComponent;
























// import styled from "styled-components";
// import OverviewComponent from "./OverviewComponent";
// import TransactionComponent from "./TransactionComponent";
// import { useEffect, useState } from "react";

// const Container = styled.div`
// display:flex;
// flex-direction:column;
// align-items:center;
// margin:30px 0 10px ;
// font-family:Montserrat;
// width:360px;
// `;

// const HomeComponent = (props) => {

//     const [transaction, updateTransaction] = useState([]);
//     const [expense, updateExpense] = useState(0);
//     const [income, updateIncome] = useState(0);

//     const addTransaction = (payload) => {
//         const transactionArray = [...transaction]
//         transactionArray.push(payload);
//         updateTransaction(transactionArray);
//     }

//     const calculateBalance = () => {
//         let exp = 0;
//         let inc = 0;

//         transaction.map((payload) => {
//             payload.type === "EXPENSE" ? (exp = exp + payload.amount) : (inc = inc + payload.amount);//change
//         });

//         updateExpense(exp);
//         updateIncome(inc);

//     };

//     useEffect(() => calculateBalance(), [transaction]);

//     return (
//         <Container>
//             Track your daily expenses effortlessly

//             <OverviewComponent addTransaction={addTransaction} expense={expense} income={income} />
//             <TransactionComponent transaction={transaction} />
//         </Container>
//     );
// }

// export default HomeComponent;