import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  );
}
