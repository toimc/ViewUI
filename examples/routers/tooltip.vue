<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div>
        <div class="top">
            <Tooltip content="Top Left text" placement="top-start">
                <i-button>Top Left</i-button>
            </Tooltip>
            <Tooltip content="Top Center text" placement="top">
                <i-button>Top Center</i-button>
            </Tooltip>
            <Tooltip content="Top Right text" placement="top-end">
                <i-button>Top Right</i-button>
            </Tooltip>
        </div>
        <div class="center">
            <div class="center-left">
                <Tooltip content="Left Top text" placement="left-start">
                    <i-button>Left Top</i-button>
                </Tooltip><br><br>
                <Tooltip content="Left Center text" placement="left">
                    <i-button>Left Center</i-button>
                </Tooltip><br><br>
                <Tooltip content="Left Bottom text" placement="left-end">
                    <i-button>Left Bottom</i-button>
                </Tooltip>
            </div>
            <div class="center-right">
                <Tooltip content="Right Top text" placement="right-start">
                    <i-button>Right Top</i-button>
                </Tooltip><br><br>
                <Tooltip content="Right Center text" placement="right">
                    <i-button>Right Center</i-button>
                </Tooltip><br><br>
                <Tooltip content="Right Bottom text" placement="right-end">
                    <i-button>Right Bottom</i-button>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <Tooltip content="Bottom Left text" placement="bottom-start">
                <i-button>Bottom Left</i-button>
            </Tooltip>
            <Tooltip content="Bottom Center text" placement="bottom">
                <i-button>Bottom Center</i-button>
            </Tooltip>
            <Tooltip content="Bottom Right text" placement="bottom-end">
                <i-button>Bottom Right</i-button>
            </Tooltip>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
