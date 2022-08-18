import Bell from "./components/Bell";
import Table from "./components/Table";
import SortingTable from "./components/SortingTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
function App() {
  return (
    <div className="App">
      <Bell />
      {/* <Table /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
