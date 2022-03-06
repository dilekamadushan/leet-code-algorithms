const test = (comments) => {
    comments.forEach((comment) => {
        if (comment.RICH_TEXT !== null) {
            const blocks = comment.RICH_TEXT.blocks;
            const entityRanges = [];
            let suffixLength = 0;
            if (Array.isArray(blocks) && blocks.length > 1) {
                for (let i = 0; i < blocks.length; i++) {
                    blocks[i].entityRanges.forEach((entityRange) => {
                        entityRange.name = blocks[i].text.substring(entityRange.offset, entityRange.offset + entityRange.length);
                        if (i > 0) {
                            entityRange.offset = suffixLength + entityRange.offset;
                        }
                        entityRanges.push(entityRange);
                    });
                    suffixLength += blocks[i].text.length + 1;
                }
            }
            comment.RICH_TEXT_MOBILE = {entityRanges, entityMap: comment.RICH_TEXT.entityMap};
            comment.RICH_TEXT = null;
        }
    });
    return comments;
}

const comments =
    [
        {
            "_id": "61dbd646f54796a1bbefacc2",
            "USER_ID": "61d41cdb1620b689a8663edd",
            "FIRST_NAME": "yasith",
            "LAST_NAME": "test",
            "PROFILE_PHOTO": "",
            "SYSTEM_USER_STATUS": 0,
            "JOB_TITLE": "",
            "COMPANY_NAME": "",
            "COMPANY_ID": "",
            "POST_COMMENT": "first post test_Michael Huttner kkkk\nllll test_Michael Huttner ",
            "POST_COMMENT_CREATED_DATE": "2022-01-10T06:46:30.351Z",
            "POST_COMMENT_LIKE": [],
            "POST_COMMENT_LIKED": false,
            "IS_EXPERT_CONTRIBUTOR": false,
            "RICH_TEXT": {
                "blocks": [
                    {
                        "key": "efhg6",
                        "text": "first post test_Michael Huttner kkkk",
                        "type": "unstyled",
                        "depth": 0,
                        "inlineStyleRanges": [],
                        "entityRanges": [
                            {
                                "offset": 11,
                                "length": 20,
                                "key": 0
                            }
                        ]
                    },
                    {
                        "key": "efhg6",
                        "text": "llll test_Michael Huttner ",
                        "type": "unstyled",
                        "depth": 0,
                        "inlineStyleRanges": [],
                        "entityRanges": [
                            {
                                "offset": 5,
                                "length": 20,
                                "key": 0
                            }
                        ]
                    }
                ],
                "entityMap": {
                    "0": {
                        "type": "mention",
                        "mutability": "IMMUTABLE",
                        "data": {
                            "mention": {
                                "_id": "5b438af834b7945f9b1138e4",
                                "name": "test_Michael Huttner",
                                "PHOTO": "",
                                "JOB_TITLE": "CEO",
                                "COMPANY_NAME": "Confidential",
                                "IS_PRO_MEMBER": false,
                                "CITY": "Denver",
                                "STATE": "",
                                "COUNTRY": "US",
                                "TYPE": 1,
                                "MUTUAL_FRIENDS_COUNT": 0
                            }
                        }
                    },
                    "1": {
                        "type": "mention",
                        "mutability": "IMMUTABLE",
                        "data": {
                            "mention": {
                                "_id": "5b438af834b7945f9b1138e4",
                                "name": "test_Michael Huttner",
                                "PHOTO": "",
                                "JOB_TITLE": "CEO",
                                "COMPANY_NAME": "Confidential",
                                "IS_PRO_MEMBER": false,
                                "CITY": "Denver",
                                "STATE": "",
                                "COUNTRY": "US",
                                "TYPE": 1,
                                "MUTUAL_FRIENDS_COUNT": 0
                            }
                        }
                    }
                }
            },
            "IS_COMMENT_UPDATED": false,
            "IS_PRO_MEMBER": false,
            "HEADLINE": ""
        }
    ];

console.log(JSON.stringify(test(comments)));
