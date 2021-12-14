
import "./Box.css"
export default function ProductCard(props) {
    return <div className="col-lg-4">
        {/* <h1>Welcome To React Game </h1> */}







        <div className="card mb-5  mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.name}</h5>

                <h6 className="card-price text-center">{props.dollar}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.user}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.publicproject}  </li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.acess}</li>
                    <li className={props.muted1}><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                        {props.privateproject}</li>
                    <li className={props.muted2}><span className="fa-li"><i className="fas fa-times"></i></span>
                        {props.phsupport} </li>
                    <li className={props.muted3}><span className="fa-li"><i className="fas fa-times"></i></span> {props.domain}
                    </li>
                    <li className={props.muted4}><span className="fa-li"><i className="fas fa-times"></i></span>
                        {props.status}</li>
                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>



        </div>
    </div>

}