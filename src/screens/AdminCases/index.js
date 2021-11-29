import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
function Index(props) {
  return (
    <Admin dataProvider={() => {}}>
      <Resource list={ListGuesser} />
    </Admin>
  );
}

export default Index;
