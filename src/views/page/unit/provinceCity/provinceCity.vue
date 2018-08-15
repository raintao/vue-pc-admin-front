<template>
    <div class="province-city">
        <el-select
            v-model="provinceCity.province.itemName"
            @change="provinceChange"
            value-key="dictId"
            placeholder="选择省">
                <el-option
                    v-for="item in provinceList"
                    :key="item.dictId"
                    :label="item.itemName"
                    :value="item">
                </el-option>
        </el-select>
        <el-select
            v-model="provinceCity.city.itemName"
            @change="cityChange"
            value-key="dictId"
            placeholder="选择市">
                <el-option
                    v-for="item in cityList"
                    :key="item.dictId"
                    :label="item.itemName"
                    :value="item">
                </el-option>
        </el-select>
        <el-select
            v-model="provinceCity.area.itemName"
            @change="areaChange"
            value-key="dictId"
            placeholder="选择区">
                <el-option
                    v-for="item in areaList"
                    :key="item.dictId"
                    :label="item.itemName"
                    :value="item">
                </el-option>
        </el-select>
    </div>
</template>

<style src="./provinceCity.scss" lang="scss" scoped></style>
