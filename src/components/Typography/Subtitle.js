 function Subtitle({styleClass, children}){
    return(
        <div className={`text-xl font-semibold RS{styleClass}`}>{children}</div>
    )
}

export default Subtitle