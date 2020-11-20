var TodoList = artifacts.require("TodoList");

contract("TodoList", async (accounts) => {
  it("Checking Task", async () => {
    let instance = await TodoList.deployed();
    let task = "blockchainMasterclass";
    instance.createTask(task, { from: accounts[0] });
    let _id = await instance.taskCount.call();
    let returnedValue = await instance.getTask(_id);
    assert.equal(
      task,
      returnedValue,
      "The returned value should equal the new value." + returnedValue
    );
  });
});
