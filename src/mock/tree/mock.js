import Mock from 'mockjs'
import articleChannels from './articleChannels'
import productCategories from './productCategories'
import { getModelName } from '../utils/getModelName';

var trees = {
  '/Model/ArticleChannel':articleChannels,
  '/Model/ProductCategory':productCategories,
}

window.trees = trees;

export default function mockTrees(){

  Mock.mock(RegExp('/api/data/get-model-tree?.*'),'get', (request)=>{
    let modelName = getModelName(request.url);
    return JSON.parse(JSON.stringify(window.trees[modelName]));
  })

  Mock.mock(RegExp('/api/data/save-model-tree?.*'),'post', (request)=>{
    let modelName = getModelName(request.url);
    console.log('server received tree:', modelName, JSON.parse(request.body));
  })
}