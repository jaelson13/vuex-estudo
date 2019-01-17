<template>
    <div class="main">
        <form>
            <label for="Name">Name</label>
            <input type="text" placeholder="Your name...">

            <label for="Title">Title</label>
            <textarea type="text" placeholder="Title..."></textarea>

            <input type="submit" value="Add">
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.main{
    display: flex;
    background: #DB4C17;
    width: 30vw;
    height: 400px;
    justify-content: center;
    padding-top: 50px;
}
form{
    width: 80%;
    display: flex;
    flex-direction: column;
}
form label{
    display: block;
    font-size: 0.7rem;
    margin-bottom: 8px;
    color: #fff;
}
form input[type=text],textarea{
    width: 100%;
    height: 45px;
    background: none;
    border-bottom: 1px solid #ddd;
    font-size: 0.8rem;
    color: #fff;
}
form textarea{
    min-height: 70px;
    max-height: 150px;
    max-width: 100%;
}
form input[type=text]:focus,textarea:focus{
    border-bottom: 1px solid rgb(34, 33, 33);
}
form input[type=text]{
    margin-bottom: 20px;
}

form input[type=submit]{
    width: 25%;
    height: 25px;
    font-size: 0.8rem;
    margin-top: 10px;
    background-color: #fff;
    opacity: .8;
    align-self: flex-end;
    cursor: pointer;
}
form input[type=submit]:hover{
    opacity: 1;
}
</style>
