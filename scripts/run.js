const main = async() =>{
    //const [owner, randomPerson]= await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("wavePortal");
    const waveConract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });
    await waveConract.deployed();
    
    console.log("Contract deployed to:", waveConract.address);
   // console.log("Contract deployed by:", owner.address);

    let contractBalance= await hre.ethers.provider.getBalance(waveConract.address);
    console.log("contract Balance", hre.ethers.utils.formatEther(contractBalance)); 

    let wingCount;

    wingCount= await waveConract.getTotalWings();

    //let wingTxn;
    const wingTxn = await waveConract.wing('A wing');
    await wingTxn.wait();

    const wingTxn2 = await waveConract.wing('Another Wing');
    await wingTxn2.wait();

    contractBalance = await hre.ethers.provider. getBalance(waveConract.address)

    console.log('Contract Balance', hre.ethers.utils.formatEther(contractBalance))

    //const [_, randomPerson]= await hre.ethers.getSigners();

    //wingCount= await waveConract.getTotalWings();

    //const [_, randomPerson]= await hre.ethers.getSigners();
    //wingTxn= await waveConract.connect(randomPerson).wing('Another Message');
    //await wingTxn.wait();

    let allWings = await waveConract.getAllWings();

    console.log(allWings);

    wingCount= await waveConract.getTotalWings();


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