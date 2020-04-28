import React, { Component } from 'react';
class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai:0
        }
    }
    
    a = function () {
        return (
            alert('This is my alert')
        );

    }
    b = function (x) {
        return alert(x);
    }
    renderButton = () => (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={this.a}>Detail</button>
            <button type="button" className="btn btn-secondary ml-1 mr-1" onClick={() => this.b('This is arow function')}>Edit</button>
            <button type="button" className="btn btn-secondary ml-1 mr-1" onClick={this.b.bind(this, "this is bind")}>Remove</button>
            <button type="button" className="btn btn-danger" onClick={()=>this.setForm()}>Edit Form</button>
        </div>
    )
    renderForm = () => (
        <div>
            <form classname="form-inline">
                <div classname="form-group">
                    <label htmlFor />
                    <input ref={(dulieunhap)=>{this.trunggian=dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />
                    <button type="button" className="btn btn-success mt-3" onClick={()=>this.setButtton()}>Lưu lại</button>
                </div>
            </form>
        </div>
    )

        
    //Check state
    checkDisplay = function () {
        if (this.state.trangthai === 0) {
            return this.renderButton()
        }
        else {
            return this.renderForm()
        }
    }
    // Set  state
    setForm = () => {
        this.setState({
            trangthai: 1
        });
    }
    setButtton = () => {
        this.setState({
            trangthai: 0
        });
    }
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 " + this.props.vitri_1}>
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src={"img/" + this.props.anh} alt="" />
                                </div>
                            </div>
                            <div className={"col-lg-6 " + this.props.vitri_2}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <h3>{this.props.noidung}</h3>
                                </div>
                                {this.checkDisplay()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Session;