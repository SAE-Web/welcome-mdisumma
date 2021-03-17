const myInfo = {
firstname: "Marco",
secondName: "Di Summa",
role: "Students"
}

myInfo.fullName = function() {
    return `${myInfo.firstname} ${myInfo.secondName}`
}

myInfo.attendence = (present) => {
    if(present) {
        return "attend SAE"
    }
    else {
        return "does not attend SAE"
    }
}
console.log(`${myInfo.fullName()} ${myInfo.attendence(true)}`)


for (let i = 0; i < cats.length; i++) { console.log(cats[i])
}