import axios from 'axios'

const link="http://localhost:8080/poc2BackEnd";

export const join=async(obj)=>{
    const t1=await axios.post(`${link}/make`,obj)
    return t1;
}

export const gather=async()=>{
    const fun= await axios.get(`${link}/view`)
    return fun;
}

export const erase=async(i)=>{
    const t = await axios.delete(`${link}/pop/${i}`)
    return t;
}

export const reachOne=async(position)=>{
    const a1 = await axios.get(`${link}/getting/${position}`)
    return a1;
}

export const updateOne=async(obj)=>{
    const a=await axios.put(`${link}/update`,obj)
    return a;
}