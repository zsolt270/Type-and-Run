import Button from "./ui/Button";

export default function Header() {
  return (
    <div className='d-flex justify-content-between'>
      <div className=''>
        <h1 className='text-white'>Counter</h1>
      </div>
      <div className='d-flex justify-content-end '>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}
