const ProgressBar = (props) => {

const{bgcolor,completed,barName} = props;

const progressContainer = {
    display:'flex',
    flexDirection :'column',
    alignItems:'start'
    // justifyContent: 'space-between'
}

const nameStyle = {
    height:17,
    marginLeft:"5%"

    
}
const containerStyle = {
    height:20,
    width:`100%`,
    backgroundColor:"#e0e0de",
    borderRadius:50,
    margin:10
}
const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'

}
const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
   
  }


return(
   <div style={progressContainer}>
    <h4 style={nameStyle}>{`${barName}`}</h4> 
    <div style={containerStyle}>
        <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
        </div>
    </div>
 </div>
)

}
export default ProgressBar