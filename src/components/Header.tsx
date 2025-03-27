import Button from "./ui/Button";

export default function Header() {
  return (
    <div className='row'>
      <div className='col-5'></div>
      <div className='col'>
        <h1>Counter</h1>
      </div>
      <div className='col d-flex justify-content-end'>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}
