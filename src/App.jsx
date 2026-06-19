// import SimpleVirtuosoList from "./Components/virtuoso/SimpleVirtuosoList";
// import GroupedUsersVirtuoso from "./Components/virtuoso/GroupedUsersVirtuoso";
// import InfiniteVirtuosoList from "./Components/virtuoso/InfiniteVirtuosoList";
//
// function App() {
//     return (
//         <main style={{ padding: "15px" }}>
//             <h1>Virtualization with react-virtuoso</h1>
//
//             <SimpleVirtuosoList />
//             <GroupedUsersVirtuoso />
//             <InfiniteVirtuosoList />
//         </main>
//     );
// }
//
// export default App;ç

import FixedReactWindowList from "./Components/Windows/FixedReactWindowList.jsx";
import VariableReactWindowList from "./Components/Windows/VariableReactWindowList.jsx";

function App() {
    return (
        <main style={{ padding: "20px" }}>
            <h1>Virtualización con react-window</h1>

            <FixedReactWindowList />

            <hr style={{ margin: "40px 0" }} />

            <VariableReactWindowList />
        </main>
    );
}

export default App;