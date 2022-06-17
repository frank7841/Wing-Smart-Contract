const main = async() =>{
    const [deployer]= await hre.ethers.getSigners();
    const accountbalance= await deployer.getBalance();
    

    console.log("Deploying contracts with accounts :", deployer.address);
    console.log("Account balance:", accountbalance.toString());

    
    const waveContractFactory = await hre.ethers.getContractFactory("wavePortal");
    const waveConract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.001'),
    });
    await waveConract.deployed();
    
    console.log("WaveContract Address:", waveConract.address);
    

    

};

const runMain = async ()=>{
    try {
        await main();
        process.exit(0); //exit without err
    } catch (error) {
        console.log(error)
        process.exit(1) //exit with err'Uncaught exception'
    }
};
runMain();