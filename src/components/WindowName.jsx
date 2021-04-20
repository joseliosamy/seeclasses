
import { useRouter } from 'next/router'
import { Fragment } from "react";


export default function WindowName(){
  const Router = useRouter();
  const windowName = Router.pathname.substring(10)
  console.log(windowName)
  return(
    <Fragment>

    </Fragment>
  );
}