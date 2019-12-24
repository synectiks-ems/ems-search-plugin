import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
// import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import "../../../css/studentSearchApp.css";

export class TeacherSearchPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isCollapsed: false
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2">
                        <div className="bg-white filters-box">
                            <div className="heading">
                                <h5>Filters</h5>
                            </div>
                            <div className="filters-btn">
                                <button className="btn btn-secondary clear-btn">Clear</button>
                                <button className="btn btn-secondary apply-btn">Apply</button>
                            </div>
                            <div className="filterbox">
                                <div className="box">
                                    <h4>Passing rate</h4>
                                    <div className="rainge">
                                        <div className="min-box">
                                            <label>Min</label>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="mix-box">
                                            <label>Max</label>
                                            <select>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>No. of Subjects</h4>
                                    <div className="rainge">
                                        <div className="min-box">
                                            <label>Min</label>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="mix-box">
                                            <label>Max</label>
                                            <select>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h4 onClick={this.toggleCollapse} className="toggle">Type of Faculty <i className={"fa " + (this.state.isCollapsed ? 'fa-chevron-down' : 'fa-chevron-up')}></i></h4>
                                    <div className={"rainge " + (this.state.isCollapsed ? 'active' : '')}>
                                        <ul>
                                            <li>Visiting <input type="checkbox" className="checkbox" /></li>
                                            <li>Permanent <input type="checkbox" className="checkbox" /></li>
                                            <li>Fulltime <input type="checkbox" className="checkbox" /></li>
                                            <li>Parttime <input type="checkbox" className="checkbox" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-10">
                        <div className="students-main">
                            <div className="students-heading">
                                <h3>Teachers</h3>
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
                                        <input type="text" className="input" placeholder="Enter name" />
                                    </div>
                                    <div className="students-table">
                                        <div className="top-head">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6 left">
                                                    <input type="checkbox" className="checkbox" />
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
                                                        <li><a href="#"><i className="fa fa-chevron-left"></i> Prev</a></li>
                                                        <li><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                        <li><a href="#">5</a></li>
                                                        <li><a href="#">Next <i className="fa fa-chevron-right"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-contant-row">
                                            <div className="contant-row">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-2 image-check">
                                                        <input type="checkbox" className="checkbox" />
                                                        <span><img src="../../img/uicon_m.png" alt="" /></span>
                                                    </div>
                                                    
                                                    <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                                        <div className="name"><a href="#">Teacher 1</a></div>
                                                        <div className="row admission-contant">
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Admission No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Student Id:</span>
                                                                    <p>2019/21</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Roll No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Department</span>
                                                                    <p>Computer Science</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Class:</span>
                                                                    <p>First Year</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Section:</span>
                                                                    <p>C</p>
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
                                            <div className="contant-row">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-2 image-check">
                                                        <input type="checkbox" className="checkbox" />
                                                        <span><img src="../../img/uicon_m.png" alt="" /></span>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                                        <div className="name"><a href="#">Teacher 2</a></div>
                                                        <div className="row admission-contant">
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Admission No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Student Id:</span>
                                                                    <p>2019/21</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Roll No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Department</span>
                                                                    <p>Computer Science</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Class:</span>
                                                                    <p>First Year</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Section:</span>
                                                                    <p>C</p>
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
                                            <div className="contant-row">
                                                <div className="row">
                                                    <div className="ccol-xs-6 col-sm-6 col-md-2 image-check">
                                                        <input type="checkbox" className="checkbox" />
                                                        <span><img src="../../img/uicon_m.png" alt="" /></span>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                                        <div className="name"><a href="#">Teacher 3</a></div>
                                                        <div className="row admission-contant">
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Admission No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Student Id:</span>
                                                                    <p>2019/21</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Roll No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Department</span>
                                                                    <p>Computer Science</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Class:</span>
                                                                    <p>First Year</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Section:</span>
                                                                    <p>C</p>
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
                                            <div className="contant-row">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-2 image-check">
                                                        <input type="checkbox" className="checkbox" />
                                                        <span><img src="../../img/uicon_m.png" alt="" /></span>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                                        <div className="name"><a href="#">Teacher 4</a></div>
                                                        <div className="row admission-contant">
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Admission No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Student Id:</span>
                                                                    <p>2019/21</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Roll No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Department</span>
                                                                    <p>Computer Science</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Class:</span>
                                                                    <p>First Year</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Section:</span>
                                                                    <p>C</p>
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
                                            <div className="contant-row">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-2 image-check">
                                                        <input type="checkbox" className="checkbox" />
                                                        <span><img src="../../img/uicon_m.png" alt="" /></span>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-7 name-contant">
                                                        <div className="name"><a href="#">Teacher 5</a></div>
                                                        <div className="row admission-contant">
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Admission No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Student Id:</span>
                                                                    <p>2019/21</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Roll No:</span>
                                                                    <p>951426</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Department</span>
                                                                    <p>Computer Science</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-4">
                                                                <div className="admission_no">
                                                                    <span>Class:</span>
                                                                    <p>First Year</p>
                                                                </div>
                                                                <div className="admission_no">
                                                                    <span>Section:</span>
                                                                    <p>C</p>
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
