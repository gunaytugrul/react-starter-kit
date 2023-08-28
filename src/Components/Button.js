import classNames from "classnames"


function Button({children,variant="default"}){

    return( 
    <button className={classNames({"p-4 h-10 m-5 flex items-center rounded":true
    ,"bg-gray-100":variant==="default"
    ,"bg-green-500 text-white" :variant === "succes"
    ,"bg-red-500 text-white":variant==="danger"
    ,"bg-yellow-300 text-white":variant==="warning"
})}>{children}</button>
    )
}

export default Button;