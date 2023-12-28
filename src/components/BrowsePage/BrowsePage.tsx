import React, {useDeferredValue, useEffect, useMemo, useState} from 'react';
import {browseRequest, DataType} from "@src/components/BrowsePage/browseRequests";
import './browseStyle.scss'
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const BrowsePage = () => {
  const [filter, setFilter] = useState('')
  const [sortUp, setSortUp] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [curItemChilds, setCurItemChilds] = useState([])
  const [curItem, setCurItem] = useState(null)
  const deferredFilter = useDeferredValue(filter);

  useEffect(() => {
    setLoading(true)
    browseRequest().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  const dataNames = useMemo(() => {
    let res: {name: string, lvl: number, children: DataType[]}[] = [];
    const recursiveFn = (arr: DataType[], lvl: number) => {
      arr.forEach((el) => {
        res.push(
          {
            name: el.name,
            lvl: lvl,
            children: el.children && el.children.map((child) => ({key: child.key, name: child.name}))
          }
        )
        el.children && recursiveFn(el.children, lvl + 1)
      })
    }
    recursiveFn(data, 0)

    return res
  }, [data])

  const childSortFn = (a: DataType, b: DataType) => {
    if (a.name < b.name) { return sortUp ? -1 : 1; }
    if (a.name > b.name) { return sortUp ? 1 : -1; }
    return 0;
  }

  return (
    <div>
      <h1>BrowsePage</h1>
      <Link to={'/'}>На главную</Link>
      <div className="browse-page-content">
        <div className="left">
          {
            loading && (
            <div style={{position: "absolute", left: '50%', top: '50%'}}>
              <Spinner animation="border" />
            </div>)
          }
          {dataNames.map((el, i) => (
            <div
              key={i}
              className={`data-name-item ${curItem === el.name ? 'active' : ''}`}
              style={{paddingLeft: `${el.lvl * 14}px`}}
              onClick={() => {
                setCurItemChilds(el.children || [])
                setCurItem(el.name)
              }}
            >
              {el.name}
            </div>
          ))}
        </div>
        <div className="right">
          {
            curItemChilds.length !== 0 && (
              <div className="sort-filter-wp">
                <Row>
                  <Col>
                    <Form.Control
                      onChange={(e) => setFilter(e.target.value)}
                      value={filter}
                      type="text"
                      placeholder="Filter..."
                    />
                  </Col>
                  <Col>
                    <Button variant='light' onClick={() => {
                      setSortUp(!sortUp);
                      setCurItemChilds(curItemChilds.sort(childSortFn))
                    }}>
                      Sort {sortUp ? 'up' : 'down'}
                    </Button>
                  </Col>
                </Row>
              </div>
            )
          }
          {curItemChilds.filter(el => el.name.includes(deferredFilter)).map((el, i) => {
            return <div key={i}>{el.name}</div>
          })}
          {
            curItemChilds.length === 0 ? 'no items' : null
          }
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;