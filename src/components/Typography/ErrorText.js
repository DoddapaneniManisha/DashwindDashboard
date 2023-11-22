function ErrorText({styleClass, children}){
    return(
        <p className={`text-center  text-error RS{styleClass}`}>{children}</p>
    )
}

export default ErrorText