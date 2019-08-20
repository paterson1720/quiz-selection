module.exports = {
  answeredCalls: (data) => {
    const result = data.filter(obj => obj.agent)
    return result;
  },

  losedCalls: (data) => {
    const result = data.filter(obj => !obj.agent)
    return result;
  },

  transferedCalls: (data) => {
    const result = data.filter(obj => obj.transfered.status)
    return result;
  },

  callsByDepartment: (data, departmentId) => {
    const result = data.filter(obj => obj.department === departmentId)
    return result;
  },

  callsByMinutesRange: (data, startMinute, endMinute) => {
    const filteredCalls = data.filter((obj) => {
      const range = new Date(obj.times.end) - new Date(obj.times.start);
      let startMn = startMinute * 60 * 1000
      let endMn = endMinute * 60 * 1000;
      return range > startMn && range < endMn ? obj : ''
    })
    return filteredCalls
  }
}