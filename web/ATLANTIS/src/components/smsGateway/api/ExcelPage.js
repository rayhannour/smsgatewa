import React, { Component } from "react";
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd";
import { ExcelRenderer } from "react-excel-renderer";
import { EditableFormRow, EditableCell } from "../utils/editable";

export default class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       colmunamerdata:[],
      cols: [],
      rows: [],
      columnsdata:[],
      errorMessage: null,
      
      columns: [
        {
          title: "NAME",
          dataIndex: "name",
          editable: true
        },
        {
          title: "AGE",
          dataIndex: "age",
          editable: true
        },
        {
          title: "GENDER",
          dataIndex: "gender",
          editable: true
        },
        {
          title: "Action",
          dataIndex: "action",
          render: (text, record) =>
            this.state.rows.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Icon
                  type="delete"
                  theme="filled"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </Popconfirm>
            ) : null
        }
      ]
    };
  }

  handleSave = row => {
    const newData = [...this.state.rows];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ rows: newData });
  };

  checkFile(file) {
    let errorMessage = "";
    if (!file || !file[0]) {
      return;
    }
    const isExcel =
      file[0].type === "application/vnd.ms-excel" ||
      file[0].type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isExcel) {
      errorMessage = "You can only upload Excel file!";
    }
    console.log("file", file[0].type);
    const isLt2M = file[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      errorMessage = "File must be smaller than 2MB!";
    }
    console.log("errorMessage", errorMessage);
    return errorMessage;
  }

  fileHandler = fileList => {
    console.log("fileList", fileList);
    let fileObj = fileList;
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!"
      });
      return false;
    }
    console.log("fileObj.type:", fileObj.type);
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!"
      });
      return false;
    }
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {

        this.state.columnsdata=[];

        let newRows = [];
        
        let colmunamer=[];

        resp.rows.slice(0).map((row, index) => {
           // console.log(resp.rows.slice(0));
           
          if (row && row !== "undefined") {
           
            if(index==0){
                colmunamer=row;
                this.state.colmunamerdata=colmunamer;
               
                row.map((r, idx) => {
                    this.state.columnsdata.push({
                        title: row[idx],
                        dataIndex: row[idx],
                        editable:true
                      });
                });

                
                this.state.columnsdata.push({
                    title: "Action",
                    dataIndex: "action",
                    render: (text, record) =>
                      this.state.rows.length >= 1 ? (
                        <Popconfirm
                          title="Sure to delete?"
                          onConfirm={() => this.handleDelete(record.key)}
                        >
                          <Icon
                            type="delete"
                            theme="filled"
                            style={{ color: "red", fontSize: "20px" }}
                          />
                        </Popconfirm>
                      ) : null
                  });

            }else{

                var json_arr = {};
                json_arr["key"] = index;
                
                colmunamer.map((r, idx) => {                   
                    json_arr[r] = row[idx];
                });
                                      
                var json_string = JSON.stringify(json_arr);
                const obj = JSON.parse(json_string);               
                newRows.push(obj); 

            }
           
            
          }
        });


        

        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!"
          });
          return false;
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null
          });
        }
      }
    });
    return false;
  };

  handleSubmit = async () => {
    this.props.parentCallback(this.state.rows,this.state.colmunamerdata);
    console.log("submitting: ", this.state.rows);
    //submit to API
    //if successful, banigate and clear the data
    //this.setState({ rows: [] })
  };

  handleDelete = key => {
    const rows = [...this.state.rows];
    this.setState({ rows: rows.filter(item => item.key !== key) });
  };
  handleAdd = () => {
    const { count, rows } = this.state;
    const newData = {
      key: count,
      name: "User's name",
      age: "22",
      gender: "Female"
    };
    this.setState({
      rows: [newData, ...rows],
      count: count + 1
    });
  };

  render() {
    const columnsdata=this.state.columnsdata;
    console.log(columnsdata);

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = columnsdata.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <>        
        <Row gutter={16}>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%"
            }}
          >

          </Col>

          <Col
            span={8}
            align="right"
            style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}
          >
            {this.state.rows.length > 0 && (
              <>
                <Button
                  onClick={this.handleAdd}
                  size="large"
                  type="info"
                  style={{ marginBottom: 16 }}
                >
                  <Icon type="plus" />
                  Add a row
                </Button>{" "}
                <Button
                  onClick={this.handleSubmit}
                  size="large"
                  type="primary"
                  style={{ marginBottom: 16, marginLeft: 10 }}
                >
                  Submit Data
                </Button>
              </>
            )}
          </Col>
        </Row>
        <div>
          <Upload
            name="file"
            beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false}
          >
            <Button>
              <Icon type="upload" /> Click to Upload Excel File
            </Button>
          </Upload>
        </div>
        <div style={{ marginTop: 20 }}>
          <Table  style={{ margin:"20px" }}
            components={components}
            rowClassName={() => "editable-row"}
            dataSource={this.state.rows}
            columns={columns}
          />
        </div>

        <div style={{ marginTop: 20 }}>
         <p>List Data Table</p>
        </div>
      </>
    );
  }
}
