import {Component} from "react";
import "./index.css";

class Enquiryform extends Component {
    state ={
        name:"",
        email:"",
        phone:"",
        adults:"",
        children:"",
        checkin:"",
        checkout:"",
        message:"",

    }
    onChangeName=event =>{
        this.setState({name:event.target.value})
    }
    onChangeEmail = event =>{
        this.setState({email:event.target.value})
    }
    onChangePhone = event =>{
        this.setState({phone:event.target.value})
    }
    onChangeAdults = event =>{
        this.setState({adults:event.target.value})
    }
    onChangeChildren = event =>{
        this.setState({children:event.target.value})
    }
    onChangecheckin = event =>{
        this.setState({checkin:event.target.value})
    }
    onChangecheckout = event =>{
        this.setState({checkout:event.target.value})
    }
    onChangeMessage = event =>{
        this.setState({message:event.target.value})
    }
    onSubmit = event=>{
        event.preventDefault()         
        const {name,email,phone,adults,children,checkin,checkout,message} = this.state
        let enquiryDetails = "📋 *New Customer* 📋\n\n" +
                "*Name:* " + name + "\n" +
                "*Email:* " + email + "\n" +
                "*Phone:* " + phone + "\n" +
                "*adults:* " + adults + "\n\n" +
                "*children:* " + children + "\n\n" +
                "*checkin:* " + checkin + "\n\n" +
                "*checkout:* " + checkout + "\n\n" +
                "*message:*\n" + message;
        enquiryDetails =encodeURIComponent(enquiryDetails)
        const whatsappNumber = "916369663534"
        const url = `https://wa.me/${whatsappNumber}?text=${enquiryDetails}`;
        window.open(url, '_blank');
        this.setState({
            name:"",
            email:"",
            phone:"",
            adults:"",
            children:"",
            checkin:"",
            checkout:"",
            message:"",

        })
    }
    render(){
        const {name,email,phone,adults,children,checkin,checkout,message} = this.state
        
        return(
            <div className="enquiry-form-container">
                <form>
                    <h1 className="enquiry-form-heading">Get Customised Trip</h1>
                    <div className="enquiry-items">
                        <div className="label-input">
                            <label className="labelstyle" htmlFor="name">Name</label>
                            <input className="inputstyle" id="name" type="text" value={name} onChange={this.onChangeName}></input>
                        </div>
                        <div className="label-input">
                            <label className="labelstyle" htmlFor="email">Email</label>
                            <input className="inputstyle" id="email" type="email" value={email} onChange={this.onChangeEmail}></input>
                        </div>
                    </div>
                    <div className="enquiry-items">
                        
                        <div className="label-input">
                            <label className="labelstyle" htmlFor="children">Children</label>
                            <input className="inputstyle" id="children" type="text" value={children} onChange={this.onChangeChildren}></input>
                        </div>
                        <div className="label-input">
                            <label className="labelstyle" htmlFor="adults">Adults</label>
                            <input className="inputstyle" id="adults" type="text" value={adults} onChange={this.onChangeAdults}></input>
                        </div>
                    </div>
                    <div className="enquiry-items">
                        <div className="label-input-dates"> 
                            <label className="labelstyle" htmlFor="checkin">Check In</label>
                            <input className="inputstyle-dates" id="checkin" type="date" value={checkin} onChange={this.onChangecheckin}></input>
                        </div>
                        <div className="label-input-dates">
                            <label className="labelstyle" htmlFor="checkout">Check Out</label>
                            <input className="inputstyle-dates" id="checkout" type="date" value={checkout} onChange={this.onChangecheckout}></input>
                        </div >
                    </div>
                    <div className="enquiry-items-phone">
                        <div className="label-input">
                            <label className="labelstyle" htmlFor="phone">Phone</label>
                            <input className="inputstyle" id="phone" type="text" value={phone} onChange={this.onChangePhone}></input>
                        </div>
                    </div>
                    <div className="label-input">
                        <label className="labelstyle-message" htmlFor="message">Message</label>
                        <textarea class="textareastyle" rows="8" cols="30" id="message" value={message} onChange={this.onChangeMessage}></textarea>
                    </div>
                    
                    <div class="button-container">
                        <button class="buttonstyle" type="submit" onClick={this.onSubmit}>Book Taxi</button>
                    </div>
                    
                </form>
            </div>
        )
    }

}
export default Enquiryform



