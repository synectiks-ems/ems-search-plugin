import * as React from 'react';
import { parse } from 'query-string';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
// import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import "../../../css/studentSearchApp.css";
import { staffServices } from '../_services/staffs.service';

export class StaffSearchPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            staffsData: [],
            allData: [],
            isApiCalled: false,
            isCollapsedStaff: false,
            isCollapsedStatus: false,
            isCollapsedType: false,
            primary: "0",
            secondary: "0",
            contract: "0",
            permanent: "0",
            fulltime: "0",
            parttime: "0",
            teaching: "0",
            nonteaching: "0",
            itemsPerPage: 5,
            totalPages: 1,
            currentPage: 0,
            searchName: ""
        };

        this.onClickApply = this.onClickApply.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.createTeacherJSX = this.createTeacherJSX.bind(this);
        this.createPaginationJSX = this.createPaginationJSX.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.calculateTotalPages = this.calculateTotalPages.bind(this);
        this.onCheckStaff = this.onCheckStaff.bind(this);
    }

    componentDidMount() {
        this.setState({
            isApiCalled: true
        });
        let value = parse(window.location.search).value;
        if (value) {
            staffServices.searchStaff({ name: value }).then(
                (response: any) => {
                    this.setState({
                        staffsData: response,
                        allData: response
                    });
                    this.calculateTotalPages(response);
                    this.setState({
                        isApiCalled: false
                    });
                },
                error => {
                    this.setState({
                        isApiCalled: false
                    });
                }
            );
        } else {
            staffServices.searchGetAllStaff().then(
                (response: any) => {
                    this.setState({
                        staffsData: response,
                        allData: response
                    });
                    this.calculateTotalPages(response);
                    this.setState({
                        isApiCalled: false
                    });
                },
                error => {
                    this.setState({
                        isApiCalled: false
                    });
                }
            );
        }

    }

    onStateChange(e: any) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        if (name === "searchName") {
            let result = [];
            const { allData } = this.state;
            if (value !== "") {
                if (allData && allData.length > 0) {
                    for (let i = 0; i < allData.length; i++) {
                        let staff = allData[i];
                        let name = staff.teacherName + " " + staff.staffMiddleName + " " + staff.staffLastName;
                        name = name.toLowerCase();
                        if (name.indexOf(value.toLowerCase()) !== -1) {
                            result.push(staff);
                        }
                    }
                    this.setState({
                        staffsData: result
                    });
                    this.calculateTotalPages(result);
                }
            } else {
                this.setState({
                    staffsData: allData
                });
                this.calculateTotalPages(allData);
            }
        }
    }

    calculateTotalPages(teaches: any) {
        const { itemsPerPage } = this.state;
        if (teaches && teaches.length > 0) {
            let totalPages = Math.ceil(teaches.length / itemsPerPage);
            this.setState({
                totalPages: totalPages,
                currentPage: 0
            });
        } else {
            this.setState({
                totalPages: 1,
                currentPage: 0
            });
        }
    }

    toggleCollapse(collasedItem: any) {
        this.setState({
            [collasedItem]: !this.state[collasedItem]
        });
    }

    onClickApply() {

    }

    onClickClear() {

    }

    onChangeCheckbox(e: any) {
        const { name, checked } = e.target;
        this.setState({
            [name]: checked ? "1" : "0"
        });
    }

    onCheckStaff(staff: any, e: any) {
        const { name, checked } = e.target;
        staff.isChecked = checked;
    }

    createTeacherJSX() {
        const { staffsData, isApiCalled, currentPage, itemsPerPage } = this.state;
        let retData = [];
        const length = staffsData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                const staff = staffsData[i];
                const pageFactor = Math.floor(i / itemsPerPage);
                if (pageFactor === currentPage) {
                    retData.push(
                        <div className="contant-row">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-2 image-check">
                                    <input type="checkbox" className="checkbox" name={staff.staffName} onChange={e => this.onCheckStaff(staff, e)} checked={staff.isChecked} />
                                    <span><img src="" alt="" /></span>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                    <div className="name">{staff.staffName} {staff.staffMiddleName} {staff.staffLastName}</div>
                                    <div className="row admission-contant">
                                        <div className="col-12 col-md-4">
                                            <div className="admission_no">
                                                <span>Admission No:</span>
                                                <p>{staff.id}</p>
                                            </div>
                                            <div className="admission_no">
                                                <span>Student Id:</span>
                                                <p>{staff.id}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="admission_no">
                                                <span>Roll No:</span>
                                                <p>{staff.id}</p>
                                            </div>
                                            <div className="admission_no">
                                                <span>Department</span>
                                                <p>{staff.department.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="admission_no">
                                                <span>Class:</span>
                                                <p>{staff.branch.branchName}</p>
                                            </div>
                                            <div className="admission_no">
                                                <span>Status:</span>
                                                <p>{staff.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-12 col-md-3 right-button">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i></li>
                                        <li><i className="fa fa-trash"></i></li>
                                        <li><i className="fa fa-print"></i></li>
                                        <li><i className="fa fa-cloud-download"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        } else if (isApiCalled) {
            retData.push(
                <div className="text-cetner loading_img">
                    <img src="public/plugins/cms-ui-search-plugin/img/loader.gif" alt="Loader" />
                </div>
            );
        } else {
            retData.push(
                <div className="text-center">There is no staff.</div>
            );
        }
        return retData;
    }

    changeCurrentPage(currentPage: any) {
        this.setState({
            currentPage: currentPage
        });
    }

    createPaginationJSX() {
        const { totalPages, currentPage } = this.state;
        let retData = [];
        for (let i = 0; i < totalPages; i++) {
            retData.push(
                <li className={(currentPage === i ? ' active' : '')}><a href="#" onClick={e => this.changeCurrentPage(i)}>{i + 1}</a></li>
            )
        }
        return retData;
    }

    onClickPrev() {
        const { currentPage } = this.state;
        if (currentPage - 1 >= 0) {
            this.setState({
                currentPage: currentPage - 1
            });
        }
    }

    onClickNext() {
        const { currentPage, totalPages } = this.state;
        if ((currentPage + 1) < totalPages) {
            this.setState({
                currentPage: currentPage + 1
            });
        }
    }

    render() {
        const state = this.state;
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2">
                        <div className="bg-white filters-box">
                            <div className="heading">
                                <h5>Filters</h5>
                            </div>
                            <div className="filters-btn">
                                <button className="btn btn-secondary clear-btn" onClick={this.onClickClear} disabled={state.isApiCalled}>Clear</button>
                                <button className="btn btn-secondary apply-btn" onClick={this.onClickApply} disabled={state.isApiCalled}>Apply</button>
                            </div>
                            <div className="filterbox">
                                <div className="box">
                                    <h4 onClick={e => this.toggleCollapse("isCollapsedStaff")} className="toggle">Staff <i className={"fa " + (this.state.isCollapsedStaff ? 'fa-chevron-down' : 'fa-chevron-up')}></i></h4>
                                    <div className={"rainge " + (this.state.isCollapsedStaff ? 'active' : '')}>
                                        <ul>
                                            <li>Primary <input type="checkbox" name="primary" className="checkbox" onChange={this.onChangeCheckbox} checked={state.primary === "1"} /></li>
                                            <li>Secondary <input type="checkbox" className="checkbox" name="secondary" onChange={this.onChangeCheckbox} checked={state.secondary === "1"} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <h4 onClick={e => this.toggleCollapse("isCollapsedStatus")} className="toggle">Status of Staff <i className={"fa " + (this.state.isCollapsedStatus ? 'fa-chevron-down' : 'fa-chevron-up')}></i></h4>
                                    <div className={"rainge " + (this.state.isCollapsedStatus ? 'active' : '')}>
                                        <ul>
                                            <li>Contract <input type="checkbox" name="contract" className="checkbox" onChange={this.onChangeCheckbox} checked={state.contract === "1"} /></li>
                                            <li>Permanent <input type="checkbox" className="checkbox" name="permanent" onChange={this.onChangeCheckbox} checked={state.permanent === "1"} /></li>
                                            <li>Fulltime <input type="checkbox" className="checkbox" name="fulltime" onChange={this.onChangeCheckbox} checked={state.fulltime === "1"} /></li>
                                            <li>Part-time <input type="checkbox" className="checkbox" name="parttime" onChange={this.onChangeCheckbox} checked={state.parttime === "1"} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <h4 onClick={e => this.toggleCollapse("isCollapsedType")} className="toggle">Type of Staff <i className={"fa " + (this.state.isCollapsedType ? 'fa-chevron-down' : 'fa-chevron-up')}></i></h4>
                                    <div className={"rainge " + (this.state.isCollapsedType ? 'active' : '')}>
                                        <ul>
                                            <li>Teaching <input type="checkbox" name="teaching" className="checkbox" onChange={this.onChangeCheckbox} checked={state.teaching === "1"} /></li>
                                            <li>Non Teaching <input type="checkbox" className="checkbox" name="nonteaching" onChange={this.onChangeCheckbox} checked={state.nonteaching === "1"} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-10">
                        <div className="students-main">
                            <div className="students-heading">
                                <h3>Staffs</h3>
                            </div>
                            <div className="bg-white students-inner">
                                <div className="w-100">
                                    <div className="button-section">
                                        <select className="select">
                                            <option value="Class">Class</option>
                                            <option value="Class">Class</option>
                                            <option value="Class">Class</option>
                                        </select>
                                        <select className="select">
                                            <option value="Section">Section</option>
                                            <option value="Section">Section</option>
                                            <option value="Section">Section</option>
                                        </select>
                                        <input type="text" className="input" placeholder="Enter name" name="searchName" onChange={this.onStateChange} value={state.searchName} />
                                    </div>
                                    <div className="students-table">
                                        <div className="top-head">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6 left">
                                                    <input type="checkbox" name="AllCheck" className="checkbox" value={this.state.checkedList} />
                                                    <ul>
                                                        <li><i className="fa fa-refresh"></i></li>
                                                        <li><i className="fa fa-envelope"></i></li>
                                                        <li><i className="fa fa-trash"></i></li>
                                                        <li><i className="fa fa-print"></i></li>
                                                        <li><i className="fa fa-cloud-download"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6 right text-right">
                                                    <ul>
                                                        <li><a href="#" onClick={this.onClickPrev}><i className="fa fa-chevron-left"></i> Prev</a></li>
                                                        {this.createPaginationJSX()}
                                                        <li><a href="#" onClick={this.onClickNext}>Next <i className="fa fa-chevron-right"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-contant-row">
                                            {this.createTeacherJSX()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
