function Title({className, children}){
    return(
        <p className={`text-2xl font-bold  RS{className}`}>{children}</p>
    )
}

export default Title