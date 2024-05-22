const today = () => {
    const currentDate = new Date();
    const [year, month, date]  =[
        currentDate.getFullYear(),
        currentDate.getMonth() +1,
        currentDate.getDate(),
    ];
    console.log( year + '年' + month + '月' + date + '日');
}
today ();
